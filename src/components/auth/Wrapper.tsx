import React, {forwardRef, HtmlHTMLAttributes} from "react";
import clsx from "clsx";
import styles from "@/components/auth/Wrapper.module.css";

interface WrapperProps extends HtmlHTMLAttributes<HTMLDivElement> {
    className?: string;
    width?: number;
}

const Wrapper = forwardRef<HTMLDivElement, WrapperProps>(
    ({children, className, width, ...props}, ref) => {

        const boxClasses = clsx(
            'rounded-medium p-5 lg:p-8',
            'flex flex-col items-center justify-start lg:justify-center',
            'lg:border lg:border-gray-200',
            {[styles['account-wrapper-mainBox']]: !width},
            width,
            className
        );

        return (
            <div className={boxClasses} ref={ref} {...props}>
                {children}
            </div>
        );
    });

Wrapper.displayName = "Wrapper";

export default Wrapper;