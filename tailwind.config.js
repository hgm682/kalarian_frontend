/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",       // همه فایل‌های داخل app
        "./components/**/*.{js,ts,jsx,tsx}" // همه فایل‌های components
    ],
    theme: {
        extend: {},
    },
    plugins: {
        '@tailwindcss/postcss': {},
    }

};

export default config;
