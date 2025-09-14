"use client";
import { useEffect, useState, ReactNode } from "react";

interface SvgSpriteProps {
    src: string;
}

export function SvgSprite({ src }: SvgSpriteProps) {
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        fetch(src)
            .then(res => res.text())
            .then(setContent);
    }, [src]);

    if (!content) return null;

    return <div dangerouslySetInnerHTML={{ __html: content }} />;
}
