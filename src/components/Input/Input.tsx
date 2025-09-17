import React, { forwardRef } from "react";
import styles from "@/components/Input/Input.module.css";
import InputWrapper from "@/components/Input/InputWrapper";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, ...inputProps }, ref) => {
        return (
            <InputWrapper
                ref={ref}
                label={label}
                error={error}
                inputProps={{
                    ...inputProps,
                    className: styles.input
                }}
            />
        );
    }
);

Input.displayName = "Input";

export default Input;
