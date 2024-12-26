import tsMorphProject from "ts-morph";
import fsExtra from "fs-extra";
import { fileURLToPath } from "url";
import path from "path";

// Simulate __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_FOLDER = path.resolve(__dirname, "../openapi/models"); // Resolve to absolute path
const OUTPUT_FILE = path.resolve(__dirname, "../prisma/schema.prisma"); // Prisma schema output file
const { writeFileSync, ensureDirSync } = fsExtra;
const { Project } = tsMorphProject;

// Map TypeScript types to Prisma types
const mapType = (type) => {
  switch (type) {
    case "string":
      return "String";
    case "number":
      return "Int"; // Adjust based on your model (e.g., Float if needed)
    case "boolean":
      return "Boolean";
    case "Date":
      return "DateTime";
    default:
      return type.includes("[]") ? `${mapType(type.replace("[]", ""))}[]` : "String"; // Fallback for arrays
  }
};

// Generate Prisma model for a single type alias
const generatePrismaModel = (typeAlias) => {
  const modelName = typeAlias.getName();
  const typeNode = typeAlias.getTypeNode();

  if (!typeNode || !typeNode.getKindName().includes("TypeLiteral")) {
    console.error(`Skipping ${modelName}: Not a type literal`);
    return null;
  }

  const properties = typeNode.getMembers();
  const fields = properties.map((prop) => {
    const name = prop.getName();
    const type = mapType(prop.getType().getText());
    const isOptional = prop.hasQuestionToken() ? "?" : "";
    const isId = name.toLowerCase() === "id" || name.toLowerCase() === "uuid";
    const isUnique = name.toLowerCase() === "email";

    // If the field is 'uuid', it should not be the primary key, but it may be unique
    if (name.toLowerCase() === "uuid" || name.toLowerCase() === "username") {
      return `${name} ${type}${isOptional}${isUnique ? " @unique" : ""}`;
    }

    // For all other fields, add them as usual, with ID logic for 'id'
    return `${name} ${type}${isOptional}${isId ? " @id @default(auto())" : ""}${isUnique ? " @unique" : ""}`;
  });

  fields.unshift(`id String @id @default(auto()) @map("_id") @db.ObjectId`);

  return `model ${modelName} {\n  ${fields.join("\n  ")}\n}`;
};

// Main function to generate the Prisma schema
const generatePrismaSchema = async () => {
  const project = new Project();

  // Add source files from the specified folder
  project.addSourceFilesAtPaths(`${INPUT_FOLDER}/**/*.ts`);

  const sourceFiles = project.getSourceFiles();
  console.log(`Detected ${sourceFiles.length} source files in ${INPUT_FOLDER}`);

  const typeAliases = sourceFiles.flatMap((file) => {
    console.log(`Processing file: ${file.getFilePath()}`);
    return file.getTypeAliases();
  });

  console.log(`Detected ${typeAliases.length} type aliases`);

  const models = typeAliases
    .map((typeAlias) => generatePrismaModel(typeAlias))
    .filter(Boolean); // Remove nulls for skipped types

  const schema = `
datasource db {
  provider = "mongodb"
  url      = env("MONGODB_URI")
}

generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["prismaSchemaFolder"]
}

${models.join("\n\n")}
`;

  // Ensure the output directory exists
  const outputDir = path.dirname(OUTPUT_FILE);
  ensureDirSync(outputDir);

  writeFileSync(OUTPUT_FILE, schema.trim());
  console.log(`Prisma schema generated at ${OUTPUT_FILE}`);
};

generatePrismaSchema().catch((err) => console.error(err));