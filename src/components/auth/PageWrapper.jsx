"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import clsx from "clsx";

function PageWrapper({
                         children,
                         getAPIMethods,
                         layoutProps,
                         isPrivate,
                         noDefaultLoader,
                         pageActivatorFeature,
                         redirectIfLogin,
                         afterLogin,
                         disableSSR,
                         dataProps,
                         saveScrollPosition = false,
                     }) {
    const router = useRouter();
    const { pathname } = router;
    const isLitePageAnimation = false;
    const scrollPositions = {};

    useEffect(() => {
        if (!saveScrollPosition) return;

        const saveScroll = () => {
            scrollPositions[pathname] = window.scrollY;
        };

        const restoreScroll = () => {
            setTimeout(() => {
                const scrollY = scrollPositions[pathname];
                if (scrollY !== undefined) {
                    window.scrollTo(0, scrollY);
                }
            }, 0);
        };

        router.events.on("routeChangeStart", saveScroll);
        router.events.on("routeChangeComplete", restoreScroll);

        const timeout = setTimeout(() => {
            restoreScroll();
        }, 1000);

        return () => {
            clearTimeout(timeout);
            router.events.off("routeChangeStart", saveScroll);
            router.events.off("routeChangeComplete", restoreScroll);
        };
    }, [pathname, router, saveScrollPosition]);

    const containerClass = clsx("container");

    return isLitePageAnimation ? (
        <div className={containerClass}>{children}</div>
    ) : (
        children
    );
}

export function redirectIfLogin({ component: Component, ...props }) {
    return function Wrapper() {
        // اینجا می‌تونی چک لاگین بذاری
        const isLoggedIn = false; // اینو بعداً از context یا state auth بگیر

        if (isLoggedIn && props.redirectIfLogin) {
            const router = useRouter();
            useEffect(() => {
                router.push("/"); // مسیر مقصد بعد از لاگین
            }, [router]);
            return null;
        }

        return (
            <PageWrapper {...props}>
                <Component />
            </PageWrapper>
        );
    };
}

export default PageWrapper;