import React, {forwardRef} from "react";
import styles from "./Button.module.css";
import {clsx} from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    mode?: string;
    size?: "small" | "medium" | "large";
    color?: string;
    className?: string,
    label?: string,
    CROId?: string,
    isLoading?: boolean;
    disabled?: boolean;
    radiusSize?: number;
    to?: string;
    useAnchorTag?: boolean;
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
    ({
         mode = "filled",
         size = "medium",
         color = "primary",
         className,
         label,
         CROId,
         isLoading = false,
         disabled = false,
         radiusSize = "md",
         to,
         useAnchorTag = false,
         children,
         ...props
     }, ref) => {
        const classes = clsx(
            styles.button,
            styles[mode],
            styles[size],
            styles[color],
            styles[`radius-${radiusSize}`],
            { [styles.loading]: isLoading, [styles.disabled]: disabled },
            className
        );

        return (
            <button
                ref={ref as React.Ref<HTMLButtonElement>}
                className={classes}
                disabled={disabled || isLoading}
                data-cro-id={CROId}
                {...props}
            >
                {isLoading ? "Loading..." : label || children}
            </button>
        );
    }
);

// حل خطای ESLint: react/display-name
Button.displayName = "Button";

export default Button;
