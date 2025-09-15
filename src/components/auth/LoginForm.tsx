import React, {useState, useEffect, useRef} from "react";
import {useRouter} from "next/router";
import {AccountWrapper} from "@/components/auth/AccountWrapper";
import PasswordInput from "@/components/PasswordInput/PasswordInput";
import OtpInput from "@/components/OtpInput/OtpInput";
import OTPResend from "@/components/OTPResend/OTPResend";
import Button from "@/components/Button/Button";
import {AuthStep} from "@/constants/AuthStep";
import {sendTrackEvent} from "@/services/analytics";
import {useAuthApi} from "@/services/api";

function LoginForm() {

    const router = useRouter();
    const [step, setStep] = useState(AuthStep.AUTH);
    const [response, setResponse] = useState(null);
    const [username, setUsername] = useState("");
    const otpTimerRef = useRef(new Date());

    const {request: authRequest, pending: authLoading} = useAuthApi({
        endpoint: "user/authenticate/",
        onSuccess: (result) => {
            setResponse(result);
            if (result.hasAccount) {
                setStep(result.loginMethod === "password" ? AuthStep.PASSWORD : AuthStep.OTP);
            } else {
                setStep(AuthStep.REGISTER);
            }
        },
    });

    // Handle redirect if backUrl is present
    useEffect(() => {
        const backUrl = Array.isArray(router.query.backUrl)
            ? router.query.backUrl[0]
            : router.query.backUrl;
        if (backUrl) router.replace(backUrl);
    }, [router.query.backUrl]);

    return (
        <AccountWrapper>
            {step === AuthStep.AUTH && (
                <div className="auth-step">
                    <h1>ورود | ثبت‌نام</h1>
                    <p>سلام! لطفا شماره موبایل یا ایمیل خود را وارد کنید</p>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            authRequest({username});
                            sendTrackEvent("LOGIN_CONTINUE", {isValid: true});
                        }}
                    >
                        <input
                            type="text"
                            value={username}
                            autoFocus
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="شماره موبایل یا ایمیل"
                        />
                        <Button type="submit" isLoading={authLoading}>
                            ورود
                        </Button>
                    </form>
                </div>
            )}

            {step === AuthStep.PASSWORD && response && (
                <div className="password-step">
                    <h1>رمز عبور را وارد کنید</h1>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            // Call password login API
                        }}
                    >
                        <PasswordInput
                            autoFocus
                            isRequired
                            inputWrapperProps={{fullWidth: true}}
                        />
                        <Button type="submit">تایید</Button>
                    </form>
                </div>
            )}

            {step === AuthStep.OTP && response && (
                <div className="otp-step">
                    <h1>کد تایید را وارد کنید</h1>
                    <p>کد تایید برای شماره {response.username} پیامک شد</p>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            // Call OTP verification API
                        }}
                    >
                        <OtpInput submit={() => {
                        }}/>
                        <OTPResend
                            endTime={1000 * response.timer + otpTimerRef.current.getTime()}
                            onResend={({otpCall}) => {
                                otpTimerRef.current = new Date();
                            }}
                        />
                        <Button type="submit">تایید</Button>
                    </form>
                </div>
            )}

            {step === AuthStep.REGISTER && response && (
                <div className="register-step">
                    <h1>کد تایید را وارد کنید</h1>
                    <p>
                        حساب کاربری با شماره موبایل {response.username} وجود ندارد.
                        برای ساخت حساب جدید، کد تایید برای این شماره ارسال گردید.
                    </p>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            // Call register confirmation API
                        }}
                    >
                        <OtpInput submit={() => {
                        }}/>
                        <OTPResend
                            endTime={1000 * response.timer + otpTimerRef.current.getTime()}
                            onResend={({otpCall}) => {
                                otpTimerRef.current = new Date();
                            }}
                        />
                        <Button type="submit">ادامه</Button>
                    </form>
                </div>
            )}
        </AccountWrapper>
    );
}

export default LoginForm;
