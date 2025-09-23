"use client"

import Form from "@/components/Form/Form";
import styles from "@/components/digikala/FormComponentFrame.module.css";
import Input from "@/components/Input/Input";
import textField from "@/components/digikala/TextField/TextField.module.css";
import Button from "@/components/Button/Button";
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
                    <Input isTextarea={false} inputWrapperClassName={`${styles['FormComponentFrame__input-container']}`}
                           type={'text'}
                           inputClassName={`${textField['TextField__input']} ${textField['TextField']} ${textField['TextField--secondary']}`}
                           name={'username'} autoComplete={'off'}/>
                </label>
                <Button
                    className={'relative flex items-center rounded-medium w-full mt-6 lg:mt-8 text-button-1 btn btn-primary btn-xl'}
                    label={'ورود'}/>
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