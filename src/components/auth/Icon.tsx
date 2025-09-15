"use client"

import React from "react";
import styles from "./AccountWrapper.module.css"; // مسیر CSS که کلاس logo-icon در آن هست

interface IconProps {
    icon: string; // نام آیکون، مثل "arrowRight"
    size?: number; // اندازه آیکون
    onClick?: () => void;
    className?: string; // کلاس اضافی
}

export const Icon: React.FC<IconProps> = ({icon, size = 24, onClick, className = ""}) => {
    return (
        <div
            onClick={onClick}
            className={`flex right-0 text-neutral-700 transition-all duration-300 ease-out cursor-pointer fixed lg:absolute ${styles['logo-icon']} ${className}`}>
            <svg
                style={{width: `${size}px`, height: `${size}px`, fill: 'var(--color-icon-high-emphasis)'}}>
                <use xlinkHref={`#${icon}`}></use>
            </svg>
        </div>
    );
};