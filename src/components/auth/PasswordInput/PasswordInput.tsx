import React, { useState } from "react";
import { Input } from "@/components/Input"; // u.I
import { mergeProps } from "@/utils/helpers"; // o.Z
import { jsx } from "react/jsx-runtime"; // i.jsx

export function PasswordInput(props) {
    const [showPassword, setShowPassword] = useState(false);

    const toggleVisibility = () => {
        setShowPassword(prev => !prev);
    };

    return (
        <Input
            {...mergeProps(props)}
            type={showPassword ? "text" : "password"}
            leftIcon={showPassword ? "visibilityOff" : "visibilityOn"}
            leftIconOnClick={(e) => {
                e.stopPropagation();
                toggleVisibility();
            }}
        />
    );
}
