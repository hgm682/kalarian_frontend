"use client"

import styles from "./auth/Wrapper.module.css";

export default function Logo({ width = 100, ...props }) {
    return (
        <img
            className={styles.Icon}
            width={width}
            src="https://kalarian.ir/uploads/logo/kalarian_logo.svg"
            alt="لوگوی دیجیکالا"
            {...props}
        />
    );
}
