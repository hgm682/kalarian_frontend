// Button.tsx.ts (ماژول 57931)
import React, { forwardRef } from 'react'; // ماژول 2784
import { createElement } from 'react'; // ماژول 52322
import { clsx } from 'clsx'; // ماژول 72677
import { getColor } from '@/components/digikala/Utils/ColorUtils'; // ماژول 23154
import mergeProps from '@/components/digikala/Utils/Utils'; // ماژول 70865
import styles from './Button.module.css'; // فرضی، معادل CSS Module (مشابه 86308)

// نوع‌های پراپ‌ها
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'text';
    size?: 'small' | 'medium' | 'large';
    color?: string; // کلید رنگ از getColor (مثل 'brand-shop-pomegranate-62')
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    iconLeftColor?: string;
    iconRightColor?: string;
    fullWidth?: boolean;
    disabled?: boolean;
    isLoading?: boolean;
    className?: string;
    containerClassName?: string;
    activeClassName?: string;
    disabledClassName?: string;
    loadingClassName?: string;
}

// کامپوننت Button.tsx
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = 'primary',
            size = 'medium',
            color,
            iconLeft,
            iconRight,
            iconLeftColor,
            iconRightColor,
            fullWidth,
            disabled,
            isLoading,
            className,
            containerClassName,
            activeClassName,
            disabledClassName,
            loadingClassName,
            children,
            ...buttonProps
        },
        ref
    ) => {
        // ترکیب پراپ‌ها برای button
        const mergedButtonProps = mergeProps(
            {
                disabled: disabled || isLoading,
            },
            buttonProps
        );

        // ترکیب کلاس‌ها
        const containerClasses = clsx(
            styles['Button'],
            styles[`Button--${variant}`],
            styles[`Button--${size}`],
            {
                [styles['Button.tsx--fullWidth']]: fullWidth,
                [styles['Button.tsx--disabled']]: disabled,
                [styles['Button.tsx--loading']]: isLoading,
                [activeClassName || styles['Button.tsx--active']]: !disabled && !isLoading,
                [disabledClassName || styles['Button.tsx--disabled']]: disabled,
                [loadingClassName || styles['Button.tsx--loading']]: isLoading,
            },
            containerClassName,
            className
        );

        // استایل رنگ دکمه
        const buttonStyles = color
            ? { backgroundColor: getColor(color), borderColor: getColor(color) }
            : {};

        return (
            <div className={containerClasses}>
                <button
                    ref={ref}
                    className={styles['Button__element']}
                    style={buttonStyles}
                    {...mergedButtonProps}
                >
                    {/* آیکون سمت چپ */}
                    {iconLeft && (
                        <span
                            className={clsx(styles['Button__icon'], styles['Button__icon--left'])}
                            style={{ color: getColor(iconLeftColor) }}
                        >
                          {iconLeft}
                        </span>
                    )}

                    {/* محتوای دکمه */}
                    {isLoading ? (
                        <span className={styles['Button__loader']}>در حال بارگذاری...</span>
                        ) : (
                            children
                        )}

                        {/* آیکون سمت راست */}
                        {iconRight && (
                            <span
                                className={clsx(styles['Button__icon'], styles['Button__icon--right'])}
                                style={{ color: getColor(iconRightColor) }}
                            >
                              {iconRight}
                            </span>
                    )}
                </button>
            </div>
        );
    }
);

export default Button;