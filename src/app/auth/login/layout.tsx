import ClientWrapper from "@/components/ClientWrapper";
import type { Metadata } from "next";
import "../../../app/globals.css";

export const metadata: Metadata = {
    title: "Login",
    description: "Kalarian Online Shop v4.0",
};

export default function LoginLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="fa" dir="rtl">
            <body>
                <ClientWrapper>{children}</ClientWrapper>
            </body>
        </html>
    );
}
