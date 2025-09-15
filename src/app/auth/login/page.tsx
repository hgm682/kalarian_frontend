
import styles from "@/app/auth/login/Login.module.css";
import FormComponentFrame from "@/components/FormComponentFrame";

export default function LoginPage() {
    return (
        <main className="min-h-full w-full flex items-center flex-col bg-neutral-000 justify-center">
            <div
                className={`lg:border lg:border-gray-200 rounded-medium p-5 lg:p-8 flex flex-col items-center justify-start lg:justify-center ${styles['account-wrapper-mainBox']}`}>
                <div className={'w-full relative flex items-center justify-center mb-3'}>
                    <div
                        className={`flex right-0 text-neutral-700 transition-all duration-300 ease-out 00 cursor-pointer fixed lg:absolute  ${styles['logo-icon']}`}>
                        <svg style={{width: '24px', height: '24px', fill: 'var(--color-icon-high-emphasis)'}}>
                            <use xlinkHref="#arrowRight"></use>
                        </svg>
                    </div>
                    <a href={'/'}>
                        <div className="transform transition-all duration-500 ease-out scale-60"
                             style={{width: '256px', lineHeight: 0}}>
                            <img className="w-full inline-block"
                                 src="https://kalarian.ir/uploads/logo/kalarian_logo.svg" width="100"
                                 alt="لوگوی کالارین" title=""
                                 style={{objectFit: 'contain'}}/>
                        </div>
                    </a>
                </div>
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
            </div>
        </main>
    );
}