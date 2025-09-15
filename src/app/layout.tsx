"use client";

import React from "react";
import '@/app/globals.css'

import dynamic from "next/dynamic";

const ClientOnlyLayout = dynamic(
    () => import("@/components/ClientWrapper"),
    { ssr: false }
);

const Head = dynamic(
    () => import("@/app/head"),
    { ssr: false }
);

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="fa" dir="rtl">
            <Head/>
            <body>
                <ClientOnlyLayout>{children}</ClientOnlyLayout>
            </body>
        </html>
    );
}
