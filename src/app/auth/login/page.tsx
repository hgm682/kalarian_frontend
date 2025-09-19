import LoginWrapper from "@/components/auth/LoginWrapper/LoginWrapper";
import LoginHeader from "@/components/auth/LoginHeader";
import LoginForm from "@/components/auth/LoginForm";

function LoginPage() {
    return (
        <LoginWrapper>
            <LoginHeader/>
            <LoginForm/>
        </LoginWrapper>
    );
}

export default LoginPage;