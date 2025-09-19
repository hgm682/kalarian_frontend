"use client"

import Form from "@/components/Form/Form";
import styles from "@/components/digikala/FormComponentFrame.module.css";
import Input from "@/components/Input/Input";
import textField from "@/components/digikala/TextField/TextField.module.css";
import Button from "@/components/Button";
import Link from "next/link";
import {urls as URLS} from "@/constants/Constants";


function LoginForm() {

    return (
        <div className={'w-full'}>
            <h1 className="text-h4 text-neutral-900 text-right w-full mt-4">ورود | ثبت‌نام</h1>
            <p className="text-body-2 text-neutral-700 mt-4 text-right w-full">سلام!</p>
            <p className="text-body-2 text-neutral-700 mb-4 text-right w-full">
                لطفا شماره موبایل یا ایمیل خود را وارد کنید
            </p>
            <Form>
                <label className={`${styles['FormComponentFrame']} w-full ${styles['FormComponentFrame--normal']}`}>
                    <Input isTextarea={false}
                           inputClassName={`px-2 ${textField['TextField__input']} text-subtitle w-full ${textField['TextField']} ${textField['TextField--secondary']} text-subtitle w-full py-5 lg:py-2 rounded-medium`}/>
                </label>
                <Button/>
                <p className="text-caption text-neutral-700 mt-4">
                    ورود شما به معنای پذیرش
                    <Link href={URLS.TERMS()} className="mx-1 inline-block text-secondary-700">
                        شرایط دیجی‌کالا
                    </Link>
                    و
                    <Link href={URLS.PRIVACY()} className="mx-1 inline-block text-secondary-700">
                        قوانین حریم‌خصوصی
                    </Link>
                    است
                </p>
            </Form>
        </div>
    );
}

LoginForm.displayName = "LoginForm";

export default LoginForm;