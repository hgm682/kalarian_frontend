// getColor.ts (ماژول 23154)
import colorPalette from './ColorPalette'; // فرضی، معادل eg در فایل اصلی

// تعریف نوع برای پالت رنگ
interface ColorPalette {
    core: {
        color: {
            neutral: Record<string, string>;
            brand: {
                shop: Record<string, string>;
                gold: Record<string, string>;
                ai: Record<string, string>;
                plus: Record<string, string>;
                digipay: Record<string, string>;
                fidibo: Record<string, string>;
                pindo: Record<string, string>;
                digify: Record<string, string>;
                club: Record<string, string>;
                boomi: Record<string, string>;
                fresh: Record<string, string>;
                jet: Record<string, string>;
                mehr: Record<string, string>;
                seller: Record<string, string>;
                service: Record<string, string>;
                magnet: Record<string, string>;
                ganje: Record<string, string>;
                pharmacy: Record<string, string>;
            };
        };
    };
    hint: {
        error: Record<string, string>;
        warning: Record<string, string>;
        success: Record<string, string>;
        info: Record<string, string>;
    };
}

// تابع getColor
export function getColor(colorKey: string): string | undefined {
    const palette: ColorPalette = colorPalette;

    // Split the colorKey to handle nested paths (e.g., "neutral-12", "hint-error-crimson-56")
    const keys = colorKey.split('-');

    // Handle core colors (e.g., "neutral-12", "brand-shop-pomegranate-62")
    if (keys[0] === 'neutral') {
        return palette.core.color.neutral[keys[1]];
    } else if (keys[0] === 'brand') {
        const brandType = keys[1]; // e.g., "shop"
        const shade = keys[2]; // e.g., "pomegranate-62"
        return palette.core.color.brand[brandType]?.[shade];
    } else if (keys[0] === 'hint') {
        const hintType = keys[1]; // e.g., "error"
        const shade = keys[2]; // e.g., "crimson-56"
        return palette.hint[hintType]?.[shade];
    }

    // Default case: direct lookup in neutral or fallback
    return palette.core.color.neutral[colorKey] || undefined;
}