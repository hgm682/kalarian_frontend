import React, { forwardRef } from 'react';
import { clsx } from 'clsx'; // ماژول 72677
import { mergeProps } from '@/components/digikala/Utils/Utils'; // ماژول 70865
import InputWrapper from './InputWrapper'; // ماژول 97156
import { getColor } from '@/components/digikala/Utils/ColorUtils'; // ماژول 23154
import styles from './Input.module.css'; // ماژول 86308
import { omit } from '@/components/digikala/Utils/Utils'; // ماژول 26297

const Input = forwardRef(
    (
        {
            label,
            labelMargin,
            type = 'text',
            name,
            value,
            placeholder,
            autoFocus,
            readOnly,
            leftSlot,
            leftIcon,
            leftIconOnClick,
            leftIconColor,
            rightIcon,
            rightIconOnClick,
            rightIconColor,
            helper,
            helperClassName,
            isRequired,
            error,
            successPhrase,
            backgroundColor,
            disabled = false,
            isTitleBoxAligned,
            labelClassName,
            textColor,
            isTextarea,
            fullWidth,
            showErrorIcon,
            inputWrapperProps,
            inputWrapperClassName,
            inputClassName,
            className,
            onFocus = () => {},
            onBlur = () => {},
            labelLeftSlot,
            ...rest
        },
        ref
    ) => {
        // حذف پراپ‌های مشخص از rest برای جلوگیری از ارسال به inputProps
        const inputProps = omit(
            rest,
            [
                'label',
                'labelMargin',
                'type',
                'name',
                'value',
                'placeholder',
                'autoFocus',
                'readOnly',
                'leftSlot',
                'leftIcon',
                'leftIconOnClick',
                'leftIconColor',
                'rightIcon',
                'rightIconOnClick',
                'rightIconColor',
                'helper',
                'helperClassName',
                'isRequired',
                'error',
                'successPhrase',
                'backgroundColor',
                'disabled',
                'isTitleBoxAligned',
                'labelClassName',
                'textColor',
                'isTextarea',
                'fullWidth',
                'showErrorIcon',
                'inputWrapperProps',
                'inputWrapperClassName',
                'inputClassName',
                'className',
                'onFocus',
                'onBlur',
                'labelLeftSlot'
            ]
        );

        // تعریف کلاس‌های CSS برای input
        const inputClasses = clsx('text-subtitle w-full py-5 lg:py-2 rounded-medium', textColor, inputClassName);

        // تعریف کلاس‌های CSS برای برچسب
        const labelClasses = clsx(
            { 'mr-4': !isTitleBoxAligned, 'text-neutral-300': disabled, 'text-neutral-700': !disabled, 'text-body-1': !labelClassName },
            labelClassName
        );

        // تعریف کلاس‌های CSS برای wrapper
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
                type={type}
                label={label}
                name={name}
                value={value}
                placeholder={placeholder}
                autoFocus={autoFocus}
                readOnly={readOnly}
                labelClassName={labelClasses}
                required={isRequired}
                requiredClassName="text-primary-500"
                onFocus={onFocus}
                onBlur={onBlur}
                prependIcon={rightIcon}
                prependIconColor={rightIconColor}
                prependIconOnClick={rightIconOnClick}
                appendSlot={leftSlot}
                labelLeftSlot={labelLeftSlot}
                appendIcon={leftIcon || (showErrorIcon && error ? 'error' : '')}
                appendIconColor={leftIconColor || (error ? getColor('color-hint-object-error') : '')}
                appendIconOnClick={leftIconOnClick}
                error={typeof error === 'string' ? error : error?.message}
                errorClassName="text-body-2 text-hint-text-error"
                successPhrase={successPhrase}
                successPhraseClassName="text-body-2 text-hint-text-success"
                helper={helper}
                helperClassName={clsx('pr-3 text-body-2 text-dark-neutral-600', helperClassName)}
                inputClassName={inputClasses}
                errorModeClassName={styles['InputWrapper--error']}
                activeModeClassName={styles['InputWrapper--focus']}
                fullWidth={fullWidth}
                disabled={disabled}
                inputProps={mergeProps({ disabled, autoComplete: 'off' }, inputProps)}
                containerClassName={wrapperClasses}
                colorType="secondary"
                isTextarea={isTextarea}
                className={className}
                labelMargin={labelMargin}
                {...inputWrapperProps}
            />
        );
    }
);

export default {
    Input
};