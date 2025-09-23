"use client"

import React, {forwardRef, useRef, useState} from "react";
import styles from "@/components/Input/InputWrapper.module.css";
import {clsx} from "clsx";

interface InputWrapperProps {
    name?: string;
    type?: "text";
    value?: string;
    label?: string;
    error?: string;
    helper?: boolean;
    helperClassName?: string;
    autoFocus?: boolean;
    readOnly?: boolean;
    placeholder?: string;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    inputClassName?: string;
    containerClassName?: string;
    labelClassName?: string;
    requiredClassName?: string;
    required?: boolean;
    backgroundColor?: string;
    onFocus?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    isTextarea?: boolean;
    activeModeClassName?: string;
    errorModeClassName?: string;
    disabled?: boolean;
    fullWidth?: string;
    className?: string;
    errorClassName?: string;
    successPhrase?: string;
    successPhraseClassName?: string;
    labelLeftSlot?: React.ReactNode;
    prependIcon?: React.ReactNode;
    prependIconColor?: string;
    prependIconOnClick?: (e: React.MouseEvent<HTMLSpanElement>) => void;
    appendSlot?: React.ReactNode;
}

const InputWrapper = forwardRef<HTMLInputElement | HTMLTextAreaElement , InputWrapperProps>(
    ({
         name,
         type,
         value,
         label,
         error,
         helper,
         helperClassName,
         placeholder,
         autoFocus,
         readOnly,
         inputProps,
         inputClassName,
         containerClassName,
         labelClassName,
         requiredClassName = 'text-red-500',
         required,
         onFocus,
         onBlur,
         isTextarea,
         activeModeClassName,
         errorModeClassName,
         disabled,
         fullWidth,
         className,
         errorClassName,
         successPhrase,
         successPhraseClassName,
         labelLeftSlot,
         prependIcon,
         prependIconColor,
         prependIconOnClick,
         appendSlot,
         ...props
     }, ref) => {

        const [isFocused, setIsFocused] = useState(false);

        const handleFocus = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setIsFocused(true);
            onFocus?.(event);
        };

        const handleBlur = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setIsFocused(false);
            onBlur?.(event);
        };

        const inputClasses = clsx(inputClassName, {
            [activeModeClassName || '']: isFocused,
            [errorModeClassName || '']: !!error,
        });

        const containerClasses = clsx(
            containerClassName,
            {
                [styles['InputWrapper--error']]: !!error,
                [styles['InputWrapper--focus']]: isFocused,
                [styles['InputWrapper--disabled']]: disabled,
                'w-full': fullWidth,
            },
            className
        );

        const labelClasses = clsx(
            'text-subtitle',
            labelClassName,
            {
                [requiredClassName]: required,
            }
        );

        const helperClasses = clsx(
            'text-body-2 text-hint-text-error',
            errorClassName
        );

        const successClasses = clsx(
            'text-body-2 text-hint-text-success',
            successPhraseClassName
        );

        const textareaRef = useRef<HTMLTextAreaElement>(null) || ref;

        return (
            <div className={containerClasses} {...props}>
                {label && (
                    <label className={labelClasses} htmlFor={name}>
                        {labelLeftSlot}
                        {label}
                        {required && <span className={requiredClassName}> *</span>}
                    </label>
                )}
                <div className="grow text-body-3">
                    {prependIcon && (
                        <span
                            className="absolute left-0 pl-3 pointer-events-none"
                            style={{color: prependIconColor}}
                            onClick={prependIconOnClick}
                        >
                          {prependIcon}
                        </span>
                    )}
                    {appendSlot && <div className="pr-3">{appendSlot}</div>}
                    {isTextarea ? (
                        <textarea
                            ref={textareaRef}
                            id={name}
                            name={name}
                            type={type}
                            value={value}
                            placeholder={placeholder}
                            autoFocus={autoFocus}
                            readOnly={readOnly}
                            required={required}
                            className={inputClasses}
                            disabled={disabled}
                            {...(inputProps as React.InputHTMLAttributes<HTMLInputElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    ) : (
                        <input
                            id={name}
                            name={name}
                            type={type || "text"}
                            value={value}
                            placeholder={placeholder}
                            autoFocus={autoFocus}
                            readOnly={readOnly}
                            required={required}
                            className={inputClasses}
                            disabled={disabled}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            ref={ref as React.Ref<HTMLInputElement>}
                            {...inputProps}
                        />
                    )}
                </div>
                {error && <div className={helperClasses}>{error}</div>}
                {successPhrase && <div className={successClasses}>{successPhrase}</div>}
                {helper && !error && <div className={helperClassName}>{helper}</div>}
            </div>
        );
    }
);

InputWrapper.displayName = "InputWrapper";
export default InputWrapper;
