import React, { forwardRef, useState } from 'react'; // ماژول 2784
import { createElement } from 'react'; // ماژول 52322
import { clsx } from 'clsx'; // ماژول 72677
import { getColor } from '@/components/digikala/Utils/ColorUtils'; // ماژول 23154
import styles from './InputWrapper.module.css'; // ماژول 86308 (CSS Module)

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
    appendIcon?: React.ReactNode;
    appendIconColor?: string;
    appendIconOnClick?: (e: React.MouseEvent<HTMLSpanElement>) => void;
    colorType?: React.ReactNode;
    labelMargin?: number;
}

const InputWrapper = forwardRef<HTMLInputElement | HTMLTextAreaElement , InputWrapperProps>(
    (
        {
            type = 'text',
            label,
            name,
            value,
            placeholder,
            autoFocus,
            readOnly,
            labelClassName,
            required,
            requiredClassName,
            onFocus,
            onBlur,
            prependIcon,
            prependIconColor,
            prependIconOnClick,
            appendSlot,
            labelLeftSlot,
            appendIcon,
            appendIconColor,
            appendIconOnClick,
            error,
            errorClassName,
            successPhrase,
            successPhraseClassName,
            helper,
            helperClassName,
            inputClassName,
            errorModeClassName,
            activeModeClassName,
            fullWidth,
            disabled,
            inputProps,
            containerClassName,
            colorType,
            isTextarea = false,
            className,
            labelMargin,
            ...wrapperProps
        },
        ref
    ) => {
        const [isFocused, setIsFocused] = useState(false);

        const handleFocus = (e) => {
            setIsFocused(true);
            onFocus?.(e);
        };

        const handleBlur = (e) => {
            setIsFocused(false);
            onBlur?.(e);
        };

        const Element = isTextarea ? 'textarea' : 'input';

        // کلاس‌های CSS برای input
        const inputClasses = clsx(inputClassName, {
            [activeModeClassName]: isFocused,
            [errorModeClassName]: !!error,
        });

        // کلاس‌های CSS برای container
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

        // کلاس‌های CSS برای label
        const labelClasses = clsx(
            'text-subtitle',
            labelClassName,
            {
                [requiredClassName]: required,
            }
        );

        // کلاس‌های CSS برای helper/error/success
        const helperClasses = clsx(
            'text-body-2 text-hint-text-error',
            errorClassName
        );

        const successClasses = clsx(
            'text-body-2 text-hint-text-success',
            successPhraseClassName
        );

        return (
            <div className={containerClasses} {...wrapperProps}>
                {/* Label */}
                {label && (
                    <label className={labelClasses} htmlFor={name}>
                        {labelLeftSlot}
                        {label}
                        {required && <span className={requiredClassName}> *</span>}
                    </label>
                )}

                {/* Input.tsx Container */}
                <div className="relative flex items-center">
                    {/* Prepend Icon/Slot */}
                    {prependIcon && (
                        <span
                            className="absolute left-0 pl-3 pointer-events-none"
                            style={{ color: prependIconColor }}
                            onClick={prependIconOnClick}
                        >
                          {prependIcon}
                        </span>
                    )}
                    {appendSlot && <div className="pr-3">{appendSlot}</div>}

                    {/* Input.tsx Element */}
                    <Element
                        ref={ref}
                        id={name}
                        name={name}
                        type={type}
                        value={value}
                        placeholder={placeholder}
                        autoFocus={autoFocus}
                        readOnly={readOnly}
                        required={required}
                        className={inputClasses}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        disabled={disabled}
                        {...inputProps}
                    />

                    {/* Append Icon */}
                    {appendIcon && (
                        <span
                            className="absolute right-0 pr-3 pointer-events-none"
                            style={{ color: appendIconColor }}
                            onClick={appendIconOnClick}
                        >
                          {appendIcon}
                        </span>
                                )}
                </div>

                {/* Helper/Error/Success Text */}
                {error && <div className={helperClasses}>{error}</div>}
                {successPhrase && <div className={successClasses}>{successPhrase}</div>}
                {helper && !error && <div className={helperClassName}>{helper}</div>}
            </div>
        );
    }
);

export default {
    InputWrapper
};