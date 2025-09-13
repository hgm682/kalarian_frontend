"use client"
import { useEffect } from "react";

export default function useHtmlClientData() {
    useEffect(() => {
        const setHeight = () => {
            document.documentElement.style.setProperty(
                "--window-inner-height",
                `${window.innerHeight}px`
            );
        }

        const setUserAgent = () => {
            document.documentElement.setAttribute(
                "data-intrack-useragent",
                navigator.userAgent
            );
        }
        setHeight();
        setUserAgent();
        
        window.addEventListener("resize", setHeight)

        return () => window.removeEventListener("resize", setHeight);
    }, [])
}