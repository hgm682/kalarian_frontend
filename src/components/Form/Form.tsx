import React, {forwardRef} from "react";

interface FormProps extends React.HTMLProps<HTMLFormElement> {
    action?: string;
    useFormProps?: object;
    onSubmit?: () => void;
}

const Form = forwardRef<HTMLFormElement, FormProps>(
    ({
         action,
         useFormProps,
         ...props
     }, ref) => {
        return (
            <form action={action} ref={ref} {...props}>

            </form>
        );
    });

Form.displayName = "Form";

export default Form;
