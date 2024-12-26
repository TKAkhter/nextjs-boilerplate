import { getRequestConfig } from "next-intl/server"
import { notFound } from "next/navigation"
import { routing } from "./routing";

export const AppConfig = {
  name: "Nextjs Starter",
  locales: ["en", "fr"],
  defaultLocale: "en"
}

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;
  // Ensure that the incoming locale is valid
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }
  console.log("🚀 ~ getRequestConfig ~ locale:", locale);

  // return {
  //   locale,
  //   // ...
  // };
  return {
    locale,
    messages: (await import(`@/locales/${locale}.json`)).default
  }
})
