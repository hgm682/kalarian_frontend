import React from "react";
import ClientWrapper from "@/components/ClientWrapper";
import Head from "@/app/head";
import '@/app/globals.css'

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
