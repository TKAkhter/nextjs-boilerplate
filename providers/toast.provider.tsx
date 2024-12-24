"use client";

import React from "react";
import { ToastContainer, Bounce } from "react-toastify";
import { sanitizeString } from "@/lib/utils";
// import useLocalStorage from "../hooks/useLocalStorage";

interface ToastProviderProps {
    children: React.ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps) {
    // const [colorMode] = useLocalStorage("color-theme", "light");
    return (
        <>
            {children}
            <ToastContainer
                position="top-right"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"//{sanitizeString(colorMode || "light")}
                transition={Bounce}
            />
        </>
    );
}