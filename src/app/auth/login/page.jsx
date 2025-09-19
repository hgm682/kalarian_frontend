"use client"

import Button from "../../../components/Button";
import Input from "../../../components/Input/Input";
import Form from "../../../components/Form/Form";
import {redirectIfLogin} from "../../../components/auth/PageWrapper";
import Link from "next/link";
import {urls as URLS} from "../../../constants/Constants";
import {useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import {AuthStep} from "../../../constants/AuthStep";
import Wrapper from "../../../components/auth/Wrapper";
import Header from "../../../components/auth/Header";
import styles from "../../../components/digikala/FormComponentFrame.module.css";
import textField from "../../../components/digikala/TextField/TextField.module.css";

function LoginForm({setStep, setResponse, setUsername}) {

    //useApi

    return (
        <div className={'w-full'}>
            <h1 className="text-h4 text-neutral-900 text-right w-full mt-4">ورود | ثبت‌نام</h1>
            <p className="text-body-2 text-neutral-700 mt-4 text-right w-full">سلام!</p>
            <p className="text-body-2 text-neutral-700 mb-4 text-right w-full">
                لطفا شماره موبایل یا ایمیل خود را وارد کنید
            </p>
            <Form
                useFormProps={{mode: 'onBlur'}}
                onSubmit={({username}) => {
                    username = username.trim();
                    setUsername(username);
                    request({username});
                }}>
                <label className={`${styles['FormComponentFrame']} w-full ${styles['FormComponentFrame--normal']}`}>
                    <Input isTextarea={false} inputClassName={`px-2 ${textField['TextField__input']} text-subtitle w-full ${textField['TextField']} ${textField['TextField--secondary']} text-subtitle w-full py-5 lg:py-2 rounded-medium`} />
                </label>
                <Button />
                <p className="text-caption text-neutral-700 mt-4">
                    ورود شما به معنای پذیرش
                    <Link mode="link" href={URLS.TERMS()} className="mx-1 inline-block text-secondary-700">
                        شرایط دیجی‌کالا
                    </Link>
                    و
                    <Link mode="link" href={URLS.PRIVACY()} className="mx-1 inline-block text-secondary-700">
                        قوانین حریم‌خصوصی
                    </Link>
                    است
                </p>
            </Form>
        </div>
    );
}

function LoginPage({className}) {

    const [step, setStep] = useState(AuthStep.AUTH);
    const [response, setResponse] = useState(null);
    const [username, setUsername] = useState('');
    const {query} = useRouter();
    //const ssoEnabled = useFeatureFlag('DK_WEB_SSO');

    // useEffect(() => {
    //     const backUrl = Array.isArray(query.backUrl) ? query.backUrl[0] : query.backUrl;
    //     if (backUrl) {
    //         getPageType(backUrl);
    //     }
    // }, [query.backUrl]);

    // useEffect(() => {
    //     if (ssoEnabled && query.backUrl) {
    //         const backUrl = Array.isArray(query.backUrl) ? query.backUrl[0] : query.backUrl;
    //         redirectToSSO(backUrl).then((redirectUrl) => {
    //             window.location.replace(redirectUrl);
    //         });
    //     }
    // }, [ssoEnabled, query.backUrl]);

    //if (ssoEnabled) return null;
    const searchParams = useSearchParams();
    const backUrl = searchParams.get("backUrl");

    return (
        <Wrapper className={className}>
            <Header
                setStep={setStep}
                firstStep={AuthStep.AUTH}
                hasBack={step !== AuthStep.AUTH || !!backUrl}
                shouldDefaultBack={step === AuthStep.AUTH}
                backUrl={step === AuthStep.AUTH ? backUrl : undefined}
                logoHiddenInMobile={step !== AuthStep.AUTH}
                isIconFixedMobile
            />
            {(() => {
                switch (step) {
                    case AuthStep.AUTH:
                        return <LoginForm setStep={setStep} setResponse={setResponse} setUsername={setUsername}/>;
                    // case AuthStep.PASSWORD:
                    //     return <PasswordForm setStep={setStep} response={response} setResponse={setResponse} username={username} />;
                    // case AuthStep.OTP:
                    //     return <OTPForm setStep={setStep} response={response} setResponse={setResponse} />;
                    // case AuthStep.REGISTER:
                    //     return <RegisterForm response={response} setResponse={setResponse} />;
                    default:
                        return null;
                }
            })()}
        </Wrapper>
    );
}

export default redirectIfLogin({
    component: LoginPage,
    redirectIfLogin: true,
    layoutProps: {type: 'CENTER', shouldDisableIntrackModal: true, justify: 'center'}
});