export function defineProperty<T extends object, K extends PropertyKey, V>(
    obj: T,
    key: K,
    value: V
): T & Partial<Record<K, V>> {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key as keyof T & K] = value; // خطای TS2322 اینجا رخ می‌دهد
    }
    return obj as T & Partial<Record<K, V>>;
}