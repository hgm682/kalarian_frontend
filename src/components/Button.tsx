import React, {forwardRef} from "react";
import styles from "@/components/Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
    containerClasses?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({children, isLoading, containerClasses, ...props}, ref) => {
        return (
            <div className={containerClasses}>
                <button
                    ref={ref}
                    className={styles['Button__element']}
                    {...props}
                    disabled={isLoading}>
                    {isLoading ? "در حال بارگذاری..." : children}
                </button>
            </div>
        );
    }
);

// حل خطای ESLint: react/display-name
Button.displayName = "Button";

export default Button;
