// تابع کمکی برای ترکیب مسیرها
const joinPaths = (...paths) => {
    const filteredPaths = paths.filter(Boolean);
    return `/${filteredPaths.join('/')}/`.replace(/\/\/+/g, '/');
};

// تابع کمکی برای افزودن query string
const addQuery = (url, queries = {}) => {
    const queryString = new URLSearchParams(queries).toString();
    return queryString ? `${url}?${queryString}` : url;
};

// تابع کمکی برای بررسی ویژگی‌های فعال
const isFeatureEnabled = (feature) => {
    // فرضاً یک تابع برای بررسی فعال بودن ویژگی‌ها
    return false; // باید با منطق واقعی پروژه جایگزین شود
};

// مسیرهای پایه
const BASE_URL = 'https://www.digikala.com';
const FRESH_BASE = `${BASE_URL}/fresh`;
const PROFILE_PATH = '/profile';
const ORDERS_PATH = `${PROFILE_PATH}/orders`;
const CHECKOUT_PATH = '/checkout';
const DIGICLUB_PATH = '/digiclub';
const MAGNET_PATH = '/magnet';
const COMMUNITY_PATH = `${MAGNET_PATH}/community`;
const USERS_PATH = '/users';
const FAQ_PATH = '/faq';
const LANDINGS_PATH = '/landings';

// توابع تولید URL
export const urls = {
    // مسیرهای ثابت
    CART: `${FRESH_BASE}/checkout/cart/`,
    ORDERS: `${FRESH_BASE}/profile/orders/`,
    BASE: FRESH_BASE,
    COMPARE: '/compare',
    PROFILE: PROFILE_PATH,
    MAGNET: MAGNET_PATH,
    COMMUNITY: COMMUNITY_PATH,
    USERS: USERS_PATH,
    DIGICLUB: DIGICLUB_PATH,
    LANDINGS: LANDINGS_PATH,
    ORDERS_PROFILE: ORDERS_PATH,
    ORDER_RETURN: `${ORDERS_PATH}/return`,
    MODIFY_SHIPMENT: `${ORDERS_PATH}/modify-shipment`,
    CHECKOUT: CHECKOUT_PATH,
    PAGE: '/page',
    SEARCH: () => '/search',
    IMAGE_SEARCH: () => '/search/image-search',
    FAQ: FAQ_PATH,
    BEST_SELLING: () => '/best-selling/',
    INCREDIBLE_OFFERS: () => '/incredible-offers/',
    FRESH_OFFERS: () => '/fresh-offers/',
    PROMOTION_CENTER: () => '/promotion-center/',
    WELCOME: () => `${USERS_PATH}/welcome/`,
    FORGOT_PASSWORD: () => `${USERS_PATH}/password/forgot/`,
    RESET_PASSWORD: () => `${USERS_PATH}/password/reset/`,
    LOGIN: () => `${USERS_PATH}/login/`,
    ENTER_PHONE: () => `${USERS_PATH}/enter-phone/`,
    PROFILE_HOME: () => `${PROFILE_PATH}/`,
    PHONE_CONFIRM: () => `${PROFILE_PATH}/phone/confirm/`,
    PERSONAL_INFO: () => `${PROFILE_PATH}/personal-info/`,
    COMMENTS: () => `${PROFILE_PATH}/comments/`,
    LISTS: () => `${PROFILE_PATH}/lists/`,
    ADDRESSES: () => `${PROFILE_PATH}/addresses/`,
    NOTIFICATION: () => `${PROFILE_PATH}/notification/`,
    USER_HISTORY: () => `${PROFILE_PATH}/user-history/`,
    DIGIPLUS: () => `${PROFILE_PATH}/digiplus/`,
    DIGIPLUS_SUBSCRIPTIONS: () => `${PROFILE_PATH}/digiplus/subscriptions/`,
    DIGIPLUS_ORDERS: () => `${PROFILE_PATH}/digiplus/orders/`,
    GIFT_CARDS: () => `${PROFILE_PATH}/gift-cards/`,
    GIFT_CARD_NOT_FOUND: () => `${PROFILE_PATH}/giftcard-not-found/`,
    COMPLETE_INFORMATION: () => `${PROFILE_PATH}/complete-information/`,
    DIGIPAY: () => 'https://www.digikala.com/my-digipay/?action=416',
    CHAT_ROOM: () => '/chat-room',
    SUPPORT: () => '/support',
    CONTACT_US: () => '/page/contact-us/',
    PRIVACY: () => '/page/privacy/',
    TERMS: () => '/page/terms/',
    BUG_REPORT: () => '/page/bug-report/',
    COMMENTS_RULES: () => '/page/comments-rules/',
    DIGICLUB_REWARDS: () => `${DIGICLUB_PATH}/rewards/`,
    DIGICLUB_HISTORY: () => `${DIGICLUB_PATH}/history/${isFeatureEnabled('DIGICLUB_HISTORY_MISSIONS_TAB_VIEW') ? 'ready-to-claim' : ''}`,
    DIGICLUB_LUCKYDRAW: () => `${DIGICLUB_PATH}/luckydraw/`,
    DIGICLUB_MISSIONS: () => `${DIGICLUB_PATH}/missions/`,
    DIGICLUB_MISSIONS_GAMES: () => `${DIGICLUB_PATH}/missions/#GAMES`,
    DIGICLUB_GAME_CENTER: () => `${DIGICLUB_PATH}/game-center/seedling-hope/`,
    DIGICLUB_GAMENET: () => `${DIGICLUB_PATH}/gamenet`,
    DIGICLUB_PENDING: () => `${DIGICLUB_PATH}/history/pending`,
    DIGICLUB_READY_TO_CLAIM: () => `${DIGICLUB_PATH}/history/ready-to-claim`,
    DIGICLUB_CLAIMED: () => `${DIGICLUB_PATH}/history/claimed`,
    DIGICLUB_USED: () => `${DIGICLUB_PATH}/history/used`,
    DIGICLUB_EXPIRED: () => `${DIGICLUB_PATH}/history/expired`,
    PLUS_LANDING: () => '/plus/landing/',
    FAQ_HOME: () => FAQ_PATH,
    SELLER_INTRODUCTION: () => `${LANDINGS_PATH}/seller-introduction/`,
    NEW_APP: () => `${LANDINGS_PATH}/new-app/`,
    IRANCELL: () => '/irancell',
    CATEGORIES: () => '/categories/',
    COUPON: () => '/coupon/',

    // توابع داینامیک
    MAIN: (category) => `/main/${category}/`,
    PRODUCT_LIST: (category) => `/product-list/${category}/`,
    SEARCH_FULL: () => joinPaths(BASE_URL, urls.SEARCH()),
    SEARCH_AI: () => joinPaths(BASE_URL, urls.SEARCH(), 'ai'),
    SEARCH_WITH_QUERY: (query) => `${urls.SEARCH()}/${query}/`,
    SEARCH_WITH_PARAMS: (query) => `${urls.SEARCH()}/?${new URLSearchParams({ q: query }).toString()}`,
    BRAND: ({ brandCode }) => `/brand/${brandCode}/`,
    SELLER: (sellerId) => `/seller/${sellerId}/`,
    PRODUCT: ({ productId, productTitleFa = '', productUrl, bannerId, variantId }) => {
        let url = productUrl || `/product/dkp-${productId}/${productTitleFa ? productTitleFa.replace(/\//g, '') : ''}/`;
        if (!isFeatureEnabled('someFeature') && isFeatureEnabled('SEARCH_TAB') === 'FRESH' && url.startsWith('/product/')) {
            url = `/fresh${url}`;
        }
        if (bannerId) {
            return addQuery(url, { banner: bannerId });
        }
        if (variantId && isFeatureEnabled('PDP_VARIANT_ID')) {
            return addQuery(url, { variant: variantId });
        }
        return url;
    },
    PRODUCT_COMMENT: ({ productId }) => `/comment/dkp-${productId}`,
    COMPARE_PRODUCT: (productId) => `${urls.COMPARE}/dkp-${productId}/`,
    COMPARE_MULTIPLE: (productIds) => {
        const path = productIds?.reduce((acc, id) => `${acc}${id}/`, '') || '';
        return `${urls.COMPARE}/${path}`;
    },
    BRAND_LANDING: (brandId) => `/brand-landing/${brandId}/`,
    COMMENTS_TAB: (tab) => `${urls.COMMENTS}/?activeTab=${tab}`,
    WISHLIST_DETAILS: (wishlistId) => `${PROFILE_PATH}/wishlist/${wishlistId}/details`,
    MAGNET_FEED: ({ activeTab = 'tabMagnet', activeTabQ }) => {
        let url = `${MAGNET_PATH}/feed/?activeTab=${activeTab}`;
        if (activeTabQ) url += `&activeTabQ=${activeTabQ}`;
        return url;
    },
    MAGNET_ACTIVATION: () => `${MAGNET_PATH}/activation/`,
    MAGNET_PROFILE: () => `${MAGNET_PATH}/profile/`,
    MAGNET_PROFILE_EDIT: () => `${MAGNET_PATH}/profile/edit/`,
    MAGNET_POST: (postId) => `${MAGNET_PATH}/posts/${postId}`,
    MAGNET_USER: (userId, postId) => {
        const url = `${MAGNET_PATH}/users/${userId}/`;
        return postId ? addQuery(url, { post: postId }) : url;
    },
    MAGNET_FOLLOWING: (userId, tab) => `${MAGNET_PATH}/following-followers/${userId}/?activeTab=${tab}`,
    MAGNET_LIVE: (liveId) => `${MAGNET_PATH}/live/${liveId}/`,
    COMMUNITY_CATEGORY: (categoryId) => `${COMMUNITY_PATH}/c/${categoryId}/`,
    COMMUNITY_SEARCH: (categoryId) => `${COMMUNITY_PATH}/c/${categoryId}/search/`,
    COMMUNITY_QUESTION: ({ questionId, focus = false, answerId }) => {
        let url = `${COMMUNITY_PATH}/question/${questionId}/?focus=${focus}`;
        if (answerId) url += `&answerId=${answerId}`;
        return url;
    },
    COMMUNITY_CREATE_QUESTION: () => `${COMMUNITY_PATH}/create-question/`,
    COMMUNITY_SEARCH_PAGE: () => `${COMMUNITY_PATH}/search/`,
    ORDERS_WITH_TAB: (tab) => (tab ? `${ORDERS_PATH}/?activeTab=${tab}` : ORDERS_PATH),
    MODIFY_SHIPMENT_WITH_FUNNEL: (orderId, funnel) => addQuery(`${urls.MODIFY_SHIPMENT}/${orderId}/`, { funnel }),
    ORDER_CANCEL: (orderId) => `${ORDERS_PATH}/cancel/${orderId}/`,
    ORDER_DETAILS: (orderId, isFresh = false) => {
        return isFresh ? `${FRESH_BASE}${ORDERS_PATH}/${orderId}/` : `${ORDERS_PATH}/${orderId}/`;
    },
    RETURN_ORDER: (orderId) => `${urls.ORDER_RETURN}/${orderId}/`,
    RETURN_SELECT_ITEMS: (orderId) => `${urls.ORDER_RETURN}/select-items/${orderId}`,
    RETURN_THANK_YOU: (orderId) => `${urls.ORDER_RETURN}/thank-you/${orderId}`,
    RETURN_REASONS: (orderId) => `${urls.ORDER_RETURN}/reasons/${orderId}/`,
    RETURN_OVERVIEW: (orderId) => `${urls.ORDER_RETURN}/overview/${orderId}/`,
    CANCEL_THANK_YOU: (orderId) => `${ORDERS_PATH}/cancel/thank-you/${orderId}/`,
    CHECKOUT_SHIPPING: () => joinPaths(BASE_URL, `${CHECKOUT_PATH}/shipping`),
    CHECKOUT_PAYMENT: ({ type, id } = {}) => {
        if (type && id) return `${CHECKOUT_PATH}/payment/${type}/${id}`;
        if (type && type !== 'PAYMENT') return `${CHECKOUT_PATH}/payment/${type}`;
        return joinPaths(BASE_URL, `${CHECKOUT_PATH}/payment`);
    },
    CHECKOUT_ADD_ITEM: () => `${CHECKOUT_PATH}/add-item/`,
    CHECKOUT_PAYMENT_ORDER: ({ orderId }) => `${CHECKOUT_PATH}/payment/order/${orderId}/`,
    CHEQUE: () => '/cheque',
    ORG_EXCLUSIVE: () => '/org-exclusive',
    CHECKOUT_CART: () => {
        const isChequeEnabled = false; // باید با منطق واقعی جایگزین شود
        const isOrgExclusiveEnabled = false; // باید با منطق واقعی جایگزین شود
        return `${isChequeEnabled ? urls.CHEQUE() : ''}${isOrgExclusiveEnabled ? urls.ORG_EXCLUSIVE() : ''}${CHECKOUT_PATH}/cart/`;
    },
    FAQ_QUESTION: (questionId) => `${FAQ_PATH}/question/${questionId}/`,
    FAQ_CATEGORY: ({ categoryId }) => `${FAQ_PATH}/category/${categoryId}/`,
    GIFT_CARD: (giftCardId) => `gift-cards/${giftCardId}`,
    DYNAMIC_URL: ({ url, data, queries }) => {
        const resolvedUrl = typeof url === 'function' ? url(data) : url;
        return queries && Object.keys(queries).length ? addQuery(resolvedUrl, queries) : resolvedUrl;
    },
};