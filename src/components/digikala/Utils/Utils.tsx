// mergeProps.ts
import { defineProperty } from './ObjectUtils'; // import از فایل defineProperty (یا ObjectUtils)

export default function mergeProps<T extends object, S extends Record<PropertyKey, any>>(
    target: T,
    ...sources: S[]
): T & S {
    for (const source of sources) {
        const safeSource: S = source || ({} as S);
        let keys: (keyof S)[] = Object.keys(safeSource) as (keyof S)[];

        // اضافه کردن Symbol‌ها اگر پشتیبانی شوند
        if (typeof Object.getOwnPropertySymbols === 'function') {
            const symbols = Object.getOwnPropertySymbols(safeSource).filter(
                (symbol) => Object.getOwnPropertyDescriptor(safeSource, symbol).enumerable
            ) as (keyof S)[];
            keys = keys.concat(symbols as (keyof S)[]);
        }

        // کپی کردن ویژگی‌ها به شیء هدف
        keys.forEach((key) => {
            defineProperty(target, key, safeSource[key]);
        });
    }

    return target as T & S;
}