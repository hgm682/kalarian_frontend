// services/api.ts
import { L } from "@/utils/request"; // تابع کمکی برای ساخت API

export function useAuthApi(options: {
    endpoint: string;
    onSuccess?: (data: any) => void;
    onError?: (error: any) => void;
}) {
    const request = async (payload: { username?: string; otpCall?: boolean; forceSendOtp?: boolean }) => {
        try {
            const response = await L({
                type: "POST",
                url: options.endpoint,
                transformer: (res) => {
                    const data = res.data || {};
                    return {
                        hasPassword: data.has_password,
                        hasAccount: data.has_account,
                        loginMethod: data.login_method,
                        timer: data.sms_ttl,
                        username: data.phone,
                    };
                },
                inputTransformer: () => ({
                    username: payload.username,
                    otp_call: payload.otpCall || false,
                    force_send_otp: payload.forceSendOtp,
                    hash: typeof window !== "undefined" ? window.DigikalaLiteAPI?.otpHash : null,
                }),
            });

            options.onSuccess?.(response);
            return response;
        } catch (error) {
            options.onError?.(error);
            throw error;
        }
    };

    return {
        request,
        pending: false, // می‌توان این را با useState برای loading واقعی مدیریت کرد
    };
}
