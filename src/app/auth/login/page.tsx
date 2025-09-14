export default function LoginPage() {
    return (
        <><h1>ورود به حساب کاربری</h1>
            <form>
                <input type="text" placeholder="ایمیل یا شماره تلفن"/>
                <input type="password" placeholder="رمز عبور"/>
                <button type="submit">ورود</button>
            </form>
        </>
    );
}