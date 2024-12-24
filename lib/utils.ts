import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const addDelay = async (delay: number) => {
  return new Promise((res) => setTimeout(res, delay));
};

export const sanitizeString = (str: string) => {
  const sanitizedString = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, "");
  return sanitizedString.trim();
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleToastError = (error: any) => {
  const { response } = error;
  if (response.data) {
    if (Array.isArray(response.data.issues)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      response.data.issues.forEach((issue: any) => {
        toast.error(issue.message);
      });
    }
    toast.error(response.data.message);
  } else {
    toast.error(error.message);
  }
};

interface DecodedToken {
  exp: number; // Token expiration time in seconds since the epoch
}

export const isTokenValid = (token: string | null): boolean => {
  if (!token) {
    return false;
  }

  try {
    const decoded: DecodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000; // Current time in seconds
    return decoded.exp > currentTime;
  } catch (error) {
    console.error(error);
    return false;
  }
};