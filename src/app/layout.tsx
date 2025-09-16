import React from "react";
import '@/app/globals.css'

import dynamic from "next/dynamic";
import Head from "./head";
import ClientWrapper from "@/components/ClientWrapper";

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="fa" dir="rtl">
            <Head/>
            <body>
                <ClientWrapper>{children}</ClientWrapper>
            </body>
        </html>
    );
}
