import React from "react";

export default function Head() {
    return (
        <>
            <title>kalarian</title>
            {/* Basic Meta */}
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width" />
            <meta name="theme-color" content="#ef394e" />
            <meta name="description" content="هر آنچه که نیاز دارید با بهترین قیمت بخرید! گوشی، لپ‌تاپ، لباس و ..." />

            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="/pwa-icon-180.png" />

            {/* SEO & Social */}
            <link rel="canonical" href="https://www.yoursite.com/" />
            <meta property="og:title" content="فروشگاه اینترنتی من" />
            <meta property="og:description" content="هر آنچه که نیاز دارید با بهترین قیمت بخرید!" />
            <meta property="og:type" content="website" />
        </>
    );
}
