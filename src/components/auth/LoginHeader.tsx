"use client"

import React, {forwardRef} from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import Logo from "../Logo";
import clsx from "clsx";
import {AuthStep} from "@/constants/AuthStep";
import styles from "@/components/auth/LoginWrapper/LoginWrapper.module.css";
import {Icon} from "@/components/Icon";

interface HeaderProps extends React.HTMLProps<HTMLDivElement> {
    hasBack?: boolean;
    setStep?: (step: string) => (value: (((prevState: AuthStep) => AuthStep) | AuthStep)) => void;
    firstStep?: AuthStep.AUTH;
    backUrl?: string;
    isIconFixedMobile?: boolean;
    logoHiddenInMobile?: boolean;
    shouldDefaultBack?: boolean;
    width?: number;
}

const LoginHeader = forwardRef<HTMLDivElement, HeaderProps>(
    ({
         shouldDefaultBack,
         backUrl,
         setStep,
         firstStep = AuthStep.AUTH,
         hasBack,
         isIconFixedMobile,
         logoHiddenInMobile,
         width,
         ...props
     }, ref) => {

        const router = useRouter();

        const handleBack = () => {
            if (shouldDefaultBack) {
                router.back();
            }
            if (backUrl) {
                router.push(backUrl);
                return;
            }
            setStep?.(firstStep);
        };

        const iconClasses = clsx(
            "flex right-0 text-neutral-700 transition-all duration-300 ease-out",
            {
                "cursor-pointer": hasBack,
                "opacity-0 pointer-events-none": !hasBack,
                absolute: !isIconFixedMobile,
                "fixed lg:absolute": isIconFixedMobile,
            },
            styles["logo-icon"],
        );

        const logoClasses = clsx("transform transition-all duration-500 ease-out", {
            "scale-60": hasBack,
            "hidden lg:block": logoHiddenInMobile,
        });

        return (
            <div className="w-full relative flex items-center justify-center mb-3" ref={ref} {...props}>
                <Icon
                    icon={'arrowRight'}
                    className={iconClasses}
                    size={24}
                    onClick={handleBack}
                />
                <Link href="/">
                    <Logo
                        src="https://kalarian.ir/uploads/logo/kalarian_logo.svg"
                        alt="لوگوی کالاریان"
                        width={width}
                        className={logoClasses}
                    />
                </Link>
            </div>
        );
    });

LoginHeader.displayName = "Header";

export default LoginHeader;