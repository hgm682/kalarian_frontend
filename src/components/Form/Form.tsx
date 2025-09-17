"use client";

import React, { forwardRef } from "react";
import { useForm, FormProvider, UseFormProps, FieldValues, SubmitHandler } from "react-hook-form";

interface FormItem<T extends FieldValues> {
    component: React.ReactNode;
    name?: keyof T;
    defaultValue?: T[keyof T];
    rules?: Record<string, unknown>;
}

interface FormProps<T extends FieldValues = FieldValues> extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
    useFormProps?: UseFormProps<T>;
    onFormSubmit?: SubmitHandler<T>;
    items?: FormItem<T>[];
    children?: React.ReactNode;
}

const Form = forwardRef<HTMLFormElement, FormProps<FieldValues>>(
    ({ useFormProps, onFormSubmit, items = [], children, ...props }, ref) => {
        const methods = useForm<FieldValues>(useFormProps);

        const handleSubmit: SubmitHandler<FieldValues> = onFormSubmit ?? (() => {});

        return (
            <FormProvider {...methods}>
                <form ref={ref} {...props} onSubmit={methods.handleSubmit(handleSubmit)}>
                    {items.map((item, index) => (
                        <div key={index}>{item.component}</div>
                    ))}
                    {children}
                </form>
            </FormProvider>
        );
    }
);

Form.displayName = "Form";

export default Form;
