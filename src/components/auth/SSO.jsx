// تابع فرضی برای ثبت رویدادها
const trackEvent = ({ name, body }) => {
    console.log(`Tracking event: ${name}`, body); // باید با سیستم ردیابی واقعی جایگزین شود
};

// تابع فرضی برای دریافت نوع صفحه
export const getPageType = (url) => {
    return url ? `page_${url.split('/').pop()}` : 'unknown_page'; // منطق ساده‌شده
};

// تابع فرضی برای دریافت نوع صفحه فعلی
const getCurrentPageType = () => {
    return window.location.pathname.split('/').pop() || 'home'; // منطق ساده‌شده
};

// توابع ثبت تعاملات ورود/خروج
export const loginTracking = {
    startLogin: ({ url }) => {
        trackEvent({
            name: 'login_interactions',
            body: {
                version: 2,
                page_type: url ? getPageType(url) : getCurrentPageType(),
                action: 'login_start',
                login_type: 'login_start',
            },
        });
    },

    logout: () => {
        trackEvent({
            name: 'login_interactions',
            body: {
                version: 2,
                page_type: getCurrentPageType(),
                action: 'logout',
                login_type: 'logout',
            },
        });
    },

    register: () => {
        trackEvent({
            name: 'login_interactions',
            body: {
                version: 2,
                page_type: getCurrentPageType(),
                action: 'register',
                login_type: 'otp',
            },
        });
    },

    loginWithOtp: () => {
        trackEvent({
            name: 'login_interactions',
            body: {
                version: 2,
                page_type: getCurrentPageType(),
                action: 'login',
                login_type: 'otp',
            },
        });
    },

    loginWithPassword: () => {
        trackEvent({
            name: 'login_interactions',
            body: {
                version: 2,
                page_type: getCurrentPageType(),
                action: 'login',
                login_type: 'password',
            },
        });
    },

    resetPassword: () => {
        trackEvent({
            name: 'login_interactions',
            body: {
                version: 2,
                page_type: getCurrentPageType(),
                action: 'login',
                login_type: 'reset_password',
            },
        });
    },
};