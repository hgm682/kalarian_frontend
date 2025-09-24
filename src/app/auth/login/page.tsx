import LoginWrapper from "@/components/Auth/LoginWrapper/LoginWrapper";
import LoginHeader from "@/components/Auth/LoginHeader";
import LoginForm from "@/components/Auth/LoginForm";

function LoginPage() {
    return (
        <LoginWrapper>
            <LoginHeader/>
            <LoginForm/>
        </LoginWrapper>
    );
}

export default LoginPage;