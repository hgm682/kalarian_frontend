"use client";
import { useEffect } from "react";

export default function useGTM(gtmId: string) {
  useEffect(() => {
    if (!gtmId) return;

    // Check if GTM is already loaded
    if (document.getElementById("gtm-script")) return;

    const script = document.createElement("script");
    script.id = "gtm-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    document.head.appendChild(script);

    const dataLayerScript = document.createElement("script");
    dataLayerScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    `;
    document.head.appendChild(dataLayerScript);
  }, [gtmId]);
}