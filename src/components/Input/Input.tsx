import React, {forwardRef} from "react";
import styles from "@/components/Input/Input.module.css";
import InputWrapper from "@/components/Input/InputWrapper";
import {clsx} from "clsx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    disabled?: false,
    backgroundColor?: string;
    textColor?: string;
    inputWrapperClassName?: string;
    inputClassName?: string;
    labelClassName?: string;
    isTitleBoxAligned?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({
         label,
         error,
         disabled,
         backgroundColor,
         textColor,
         inputWrapperClassName,
         inputClassName,
         labelClassName,
         isTitleBoxAligned,
         ...inputProps
     }, ref) => {

        const inputClasses = clsx('text-subtitle w-full py-5 lg:py-2 rounded-medium', textColor, inputClassName);

        const labelClasses = clsx(
            { 'mr-4': !isTitleBoxAligned, 'text-neutral-300': disabled, 'text-neutral-700': !disabled, 'text-body-1': !labelClassName },
            labelClassName
        );

        const wrapperClasses = clsx(
            'relative',
            {
                'text-neutral-200': disabled,
                'text-neutral-800': !disabled,
                'bg-neutral-100 lg:bg-neutral-000': !backgroundColor && !disabled,
                'bg-neutral-100': !backgroundColor && disabled
            },
            styles.InputWrapper,
            backgroundColor,
            textColor,
            inputWrapperClassName
        );

        return (
            <InputWrapper
                ref={ref}
                label={label}
                error={error}
                labelClassName={labelClasses}
                containerClassName={wrapperClasses}
                inputClassName={inputClasses}
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
