import React from "react";
import styles from "./AccountWrapper.module.css";
import LoginHeader from "@/components/auth/LoginHeader";

export function AccountWrapper({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div
            className={`lg:border lg:border-gray-200 rounded-medium p-5 lg:p-8 flex flex-col items-center justify-start lg:justify-center ${styles['account-wrapper-mainBox']}`}>
            <LoginHeader hasBack={true} width={200} />
            {children}
        </div>
    );
}
