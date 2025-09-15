import React, { ReactNode } from "react";

export default function MainLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <main className="min-h-full w-full flex items-center flex-col bg-neutral-000 justify-center">
            {children}
        </main>
    );
}