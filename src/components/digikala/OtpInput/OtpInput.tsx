import React, { useState, useEffect } from "react";
import { Input } from "@/components/digikala/Input/Input"; // فرضی: u.I
import classNames from "classnames";       // p.d
import styles from "./OtpInput.module.css"; // v().codeInput__trackingOtp
import { formatOtp } from "@/utils/otp";    // c.d
import { isEmpty } from "@/utils/helpers";  // d.x
import { useDigikalaLite } from "@/services/digikala"; // l.Y
import { log } from "@/utils/logger";       // f.g

// تابع WebOTP
function readOtp() {
    log("in read otp function");
    const controller = new AbortController();
    log("in the otp event");

    navigator.credentials.get({
        otp: { transport: ["sms"] },
        signal: controller.signal
    })
        .then(credential => {
            log("otp executed");
            return credential?.code;
        })
        .catch(err => {
            log(err);
            controller.abort();
        });
}

export function OtpInput({
                             onChange,
                             error,
                             name = "code",
                             codeLength = 5,
                             submit,
                             inputWrapperProps,
                             shouldUseWebOTP = false,
                             ...rest
                         }) {
    const [value, setValue] = useState("");
    const digikala = useDigikalaLite();

    // استفاده از WebOTP
    useEffect(() => {
        if (shouldUseWebOTP && isEmpty(value) && "OTPCredential" in window) {
            window.addEventListener("DOMContentLoaded", readOtp);
            return () => window.removeEventListener("DOMContentLoaded", readOtp);
        }
    }, [value]);

    // دریافت خودکار OTP از API داخلی
    useEffect(() => {
        if (digikala) {
            return digikala.watch("AUTO_FILL_OTP", (e) => {
                const otp = e.payload;
                onChange(formatOtp(otp));
                setValue(otp.split("").join("-"));
                triggerSubmit(otp);
            });
        }
    }, []);

    const cleanOtp = (val) => val?.replace(/-/g, "");

    const triggerSubmit = (val) => {
        if (val.length === codeLength) {
            setTimeout(() => submit(), 0);
        }
    };

    return (
        <Input
            name={name}
            value={value}
            onChange={(e) => {
                const val = e.target.value;
                if (val.length < 2 * codeLength - 1) {
                    onChange(cleanOtp(formatOtp(val)));
                    const formatted = val?.split?.("")?.join?.("-");
                    (formatted && Number(cleanOtp(formatted)) || formatted === "") && setValue(formatted);
                }
                triggerSubmit(val);
            }}
            autoFocus
            maxLength={codeLength + Math.round(codeLength / 2) + 1}
            inputMode="numeric"
            type="text"
            inputClassName={classNames("text-center", styles.codeInput__trackingOtp)}
            error={error}
            inputWrapperProps={inputWrapperProps ?? { fullWidth: true }}
            autoComplete={shouldUseWebOTP ? "one-time-code" : undefined}
            {...rest}
        />
    );
}
