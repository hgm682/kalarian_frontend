import React, {forwardRef} from "react";
import styles from "./Button.module.css";
import {clsx} from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
    containerClassName?: string,
    color?: string;
    disabled?: boolean;
    variant?: "primary" | "secondary";
    size?: "small" | "medium" | "large";
    fullWidth?: boolean;
    activeClassName?: string,
    disabledClassName?: string,
    loadingClassName?: string,
    className?: string,
    iconLeft?: React.ReactNode,
    iconLeftColor?: string,
    iconRight?: React.ReactNode,
    iconRightColor?: string,
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({
         children,
         isLoading,
         containerClassName,
         color,
         disabled,
         variant,
         size,
         fullWidth,
         activeClassName,
         disabledClassName,
         loadingClassName,
         className,
         iconLeft,
         iconLeftColor,
         iconRight,
         iconRightColor,
         ...props
     }, ref) => {

        const containerClasses = clsx(
            styles['Button'],
            styles[`Button--${variant}`],
            styles[`Button--${size}`],
            {
                [styles['Button--fullWidth']]: fullWidth,
                [styles['Button--disabled']]: disabled,
                [styles['Button--loading']]: isLoading,
                [activeClassName || styles['Button--active']]: !disabled && !isLoading,
                [disabledClassName || styles['Button--disabled']]: disabled,
                [loadingClassName || styles['Button--loading']]: isLoading,
            },
            containerClassName,
            className
        );

        const buttonStyles = color
            ? {backgroundColor: color, borderColor: color}
            : {};

        return (
            <div className={containerClasses}>
                <button
                    ref={ref}
                    className={styles['Button__element']}
                    style={buttonStyles} {...props}
                >
                    {iconLeft && (
                        <span
                            className={clsx(styles['Button__icon'], styles['Button__icon--left'])}
                            style={{color: iconLeftColor}}
                        >
                          {iconLeft}
                        </span>
                    )}
                    {isLoading ? (
                        <span className={styles['Button__loader']}>در حال بارگذاری...</span>
                    ) : (
                        children
                    )}

                    {iconRight && (
                        <span
                            className={clsx(styles['Button__icon'], styles['Button__icon--right'])}
                            style={{color: iconRightColor}}
                        >
                              {iconRight}
                            </span>
                    )}
                </button>
            </div>
        );
    }
);

// حل خطای ESLint: react/display-name
Button.displayName = "Button";

export default Button;
