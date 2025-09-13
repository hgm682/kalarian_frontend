"use client"
import { ReactNode } from "react";
import useHtmlClientData from "@/hooks/useHtmlClientData";
import useGTM from "@/hooks/useGTM";

export default function ClientWrapper({ children }: { children: ReactNode }) {
    useGTM("GTM-00000000");
    useHtmlClientData();
    return <>{children}</>;
}