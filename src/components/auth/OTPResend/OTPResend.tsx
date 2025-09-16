import React from "react";
import Button from "@/components/Button"; // o.z
import Icon from "@/components/Icon";     // s.J
import { formatTime } from "@/utils/time"; // i.J
import classNames from "classnames";       // a.d

export function OTPResend({
                              error,
                              endTime,
                              onResend,
                              isLoading,
                              shouldHideOTPCall,
                              buttonColor,
                              descriptionColor = "text-neutral-700"
                          }) {
    const remaining = endTime ? formatTime(endTime, { hasHours: false }) : 0;

    const handleResend = () => {
        onResend({ otpCall: false });
    };

    if (error) {
        return <p className={classNames("w-full mt-4 text-center text-body-2 py-2", descriptionColor)}>{error}</p>;
    }

    if (endTime && remaining !== 0) {
        return (
            <p className={classNames("w-full mt-4 text-center text-body-2 py-2", descriptionColor)}>
                <span className="w-10 inline-block mx-1 text-center">{remaining}</span>
                مانده تا دریافت مجدد کد
            </p>
        );
    }

    if (shouldHideOTPCall) {
        return (
            <Button
                mode="text"
                size="small"
                color={buttonColor ?? "secondary"}
                onClick={handleResend}
                isLoading={isLoading}
                className="mt-4 w-full"
            >
                دریافت مجدد کد تایید
            </Button>
        );
    }

    return (
        <div className="w-full flex items-center justify-center mb-6 mt-4 text-caption user-select-none">
            دریافت مجدد کد از طریق
            <span onClick={handleResend} className="flex items-center text-secondary-500 mx-2 cursor-pointer">
                پیامک <Icon icon="chevronLeft" size={20} color="secondary" />
            </span>
            یا
            <span onClick={() => onResend({ otpCall: true })} className="flex items-center text-secondary-500 mx-2 cursor-pointer">
                تماس <Icon icon="chevronLeft" size={20} color="secondary" />
            </span>
        </div>
    );
}
