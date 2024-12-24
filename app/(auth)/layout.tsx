'use client';

import StoreProvider from "@/providers/store.provider";
import ToastProvider from "@/providers/toast.provider";
import TooltipProvider from "@/providers/tooltip.provider";

export default function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <StoreProvider>
            <ToastProvider>
                <TooltipProvider>
                    {children}
                </TooltipProvider>
            </ToastProvider>
        </StoreProvider>
    );
}
