"use client"
import useHtmlClientData from "@/hooks/useHtmlClientData";
import useGTM from "@/hooks/useGTM";
import {ReactNode} from "react";
import {SvgSprite} from "@/components/SvgSprite";

export default function ClientWrapper({children}: { children: ReactNode }) {
    useGTM("GTM-00000000");
    useHtmlClientData();
    return (
        <>
            <SvgSprite src="/svg/icons.svg" />
            {children}
        </>
    );
}