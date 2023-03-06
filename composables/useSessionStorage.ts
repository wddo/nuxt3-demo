import { UnwrapRef } from "nuxt/dist/app/compat/capi";

export const useSessionStorage = <T extends Object>(
  key: string,
  defaultValue: UnwrapRef<T> | null
) => {
  const value = sessionStorage.getItem(key);
  const storageData = value ? JSON.parse(value) : null;

  const storage = ref({ ...storageData, ...defaultValue });

  watch(
    storage,
    (value, oldValue, onCleanup) => {
      if (value) {
        const newValue = oldValue ? { ...oldValue, ...value } : { ...value };
        sessionStorage.setItem(key, JSON.stringify(newValue));
      } else {
        sessionStorage.removeItem(key);
      }
    },
    { immediate: true }
  );

  return {
    storage,
  };
};
