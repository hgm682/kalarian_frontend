import React, {forwardRef, ReactNode} from "react";
import styles from "@/components/Input/InputWrapper.module.css";

interface InputWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    label?: string;
    error?: string;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    inputClassName?: string;
    containerClassName?: string;
}

const InputWrapper = forwardRef<HTMLDivElement, InputWrapperProps>(
    ({ label, error, inputProps, inputClassName, containerClassName, ...props }, ref) => {
        return (
            <div ref={ref} className={containerClassName} {...props}>
                {label && <label>{label}</label>}
                <input className={inputClassName} {...inputProps} />
                {error && <span>{error}</span>}
            </div>
        );
    }
);

InputWrapper.displayName = "InputWrapper";
export default InputWrapper;
