import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { LITE_PAGE_ANIMATION } from "@/constants/features";
import styles from "@/styles/PageWrapper.module.css";

const scrollPositions = {};

function restoreScroll(path) {
    const position = scrollPositions[path];
    if (position !== undefined) {
        window.scrollTo(0, position);
    }
}

export function withPageWrapper({
                                    component: PageComponent,
                                    getAPIMethods,
                                    layoutProps,
                                    isPrivate,
                                    noDefaultLoader,
                                    pageActivatorFeature,
                                    redirectIfLogin,
                                    afterLogin,
                                    disableSSR,
                                    dataProps,
                                    saveScrollPosition = true,
                                }) {
    const Wrapped = (props) => {
        const router = useRouter();

        // مدیریت Scroll Position
        useEffect(() => {
            if (!saveScrollPosition) return;

            const handleRouteChangeStart = () => {
                scrollPositions[router.pathname] = window.scrollY;
            };
            const handleRouteChangeComplete = () => {
                setTimeout(() => restoreScroll(router.pathname), 0);
            };

            router.events.on("routeChangeStart", handleRouteChangeStart);
            router.events.on("routeChangeComplete", handleRouteChangeComplete);

            const timeout = setTimeout(() => restoreScroll(router.pathname), 1000);

            return () => {
                clearTimeout(timeout);
                router.events.off("routeChangeStart", handleRouteChangeStart);
                router.events.off("routeChangeComplete", handleRouteChangeComplete);
            };
        }, [router, saveScrollPosition]);

        // Render کردن صفحه
        const useAnimation = pageActivatorFeature?.includes(LITE_PAGE_ANIMATION);

        return useAnimation ? (
            <div className={styles.container}>
                <PageComponent {...props} />
            </div>
        ) : (
            <PageComponent {...props} />
        );
    };

    Wrapped.getAPIMethods = getAPIMethods;
    Wrapped.layoutProps = layoutProps;
    Wrapped.isPrivate = isPrivate;
    Wrapped.noDefaultLoader = noDefaultLoader;
    Wrapped.pageActivatorFeature = pageActivatorFeature;
    Wrapped.redirectIfLogin = redirectIfLogin;
    Wrapped.afterLogin = afterLogin;
    Wrapped.disableSSR = disableSSR;
    Wrapped.dataProps = dataProps;
    Wrapped.saveScrollPosition = saveScrollPosition;

    return Wrapped;
}
