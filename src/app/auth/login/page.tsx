"use client"

import {LoginWrapper} from "@/components/auth/LoginWrapper";
import FormComponentFrame from "@/components/digikala/FormComponentFrame";

import React, {useState} from "react";
import {AuthStep} from "@/constants/AuthStep";
import Button from "@/components/Button";
import Input from "@/components/Input/Input";

export default function LoginPage() {

    const [step, setStep] = useState(AuthStep.AUTH);
    const [username, setUsername] = useState("");

    return (

        <LoginWrapper>
            <div className={'w-full'}>
                {step === AuthStep.AUTH && (
                    <>
                        <h1 className="text-h4 text-neutral-900 text-right w-full mt-4">ورود | ثبت‌نام</h1>
                        <p className="text-body-2 text-neutral-700 mt-4 text-right w-full">سلام!</p>
                        <p className="text-body-2 text-neutral-700 mb-4 text-right w-full">
                            لطفا شماره موبایل یا ایمیل خود را وارد کنید
                        </p>
                        <form onSubmit={() => {}}>
                            <Input/>
                            <Button type="submit">
                                ورود
                            </Button>
                        </form>
                    </>
                )}
                <p className="text-caption text-neutral-700 mt-4">ورود شما به معنای پذیرش<a
                    className="mx-1 inline-block text-secondary-700" href="/page/terms/">شرایط کالارین</a>و<a
                    className="mx-1 inline-block text-secondary-700" href="/page/privacy/">قوانین حریم‌خصوصی</a>است
                </p>
            </div>
        </LoginWrapper>
    );
}