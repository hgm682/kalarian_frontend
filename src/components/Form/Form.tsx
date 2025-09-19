"use client";

import React, { forwardRef } from "react";

interface UseFormProps<T> {
    handleSubmit?: (callback: (data: T) => void) => (e: React.FormEvent) => void;
    onSubmit?: (data: T) => void;
}

interface FormProps<T = Record<string, unknown>> extends React.FormHTMLAttributes<HTMLFormElement> {
    action?: string;
    useFormProps?: UseFormProps<T>;
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form = forwardRef<HTMLFormElement, FormProps>(
    (
        {
            action,
            useFormProps,
            onSubmit,
            children,
            ...props
        },
        ref
    ) => {
        const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            if (useFormProps?.handleSubmit && useFormProps?.onSubmit) {
                return useFormProps.handleSubmit(useFormProps.onSubmit)(e);
            }

            if (onSubmit) {
                return onSubmit(e);
            }
        };

        return (
            <form
                ref={ref}
                action={action}
                onSubmit={handleFormSubmit}
                {...props}
            >
                {children}
            </form>
        );
    }
);

Form.displayName = "Form";

export default Form;
