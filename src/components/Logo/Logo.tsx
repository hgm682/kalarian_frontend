"use client"

import styles from "@/components/Logo/Logo.module.css";

export default function Logo({ width = 100, ...props }) {
    return (
        <img
            className={styles.logoIcon}
            width={width}
            src="https://kalarian.ir/uploads/logo/kalarian_logo.svg"
            alt="لوگوی دیجیکالا"
            {...props}
        />
    );
}
