'use client';

import ToastProvider from "@/providers/toast.provider";
import TooltipProvider from "@/providers/tooltip.provider";

export default function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <ToastProvider>
            <TooltipProvider>
                {children}
            </TooltipProvider>
        </ToastProvider>
    );
}
