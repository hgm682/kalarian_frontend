import AccountHeader from "@/components/auth/AccountHeader";
import { AccountWrapper } from "@/components/auth/AccountWrapper";
import styles from "@/components/auth/AccountWrapper.module.css";
import FormComponentFrame from "@/components/FormComponentFrame";

export default function LoginPage() {

    return (
        <AccountWrapper>
            <AccountHeader />
            <div className={'w-full'}>
                <h1 className="text-h4 text-neutral-900 text-right w-full mt-4">ورود | ثبت‌نام</h1>
                <p className="text-body-2 text-neutral-700 mt-4 text-right w-full">سلام!</p>
                <p className="text-body-2 text-neutral-700 mb-4 text-right w-full">لطفا شماره موبایل یا ایمیل خود را
                    وارد کنید</p>
                <FormComponentFrame/>
                <p className="text-caption text-neutral-700 mt-4">ورود شما به معنای پذیرش<a
                    className="mx-1 inline-block text-secondary-700" href="/page/terms/">شرایط کالارین</a>و<a
                    className="mx-1 inline-block text-secondary-700" href="/page/privacy/">قوانین حریم‌خصوصی</a>است
                </p>
            </div>
        </AccountWrapper>
    );
}