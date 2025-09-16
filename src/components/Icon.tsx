"use client"

import React from "react";

interface IconProps {
    icon: string;
    size?: number;
    onClick?: () => void;
    className?: string;
}

export const Icon: React.FC<IconProps> = ({icon, size = 24, onClick, className = ""}) => {

    return (
        <div onClick={onClick} className={className}>
            <svg style={{width: `${size}px`, height: `${size}px`, fill: 'var(--color-icon-high-emphasis)'}}>
                <use xlinkHref={`#${icon}`}></use>
            </svg>
        </div>
    );
};