import { UnwrapRef } from "nuxt/dist/app/compat/capi";

export const useSessionStorage = <T extends Object>(
  key: string,
  defaultValue: UnwrapRef<T> | null
) => {
  const value = sessionStorage.getItem(key);
  const storageData = value ? JSON.parse(value) : null;

  const data = ref<any | null>(storageData);
  const storage = ref(defaultValue);

  watch(
    storage,
    (value, oldValue, onCleanup) => {
      if (value) {
        data.value = oldValue ? { ...oldValue, ...value } : { ...value };
      }
    },
    { immediate: true }
  );

  watchEffect(() => {
    if (data.value) {
      sessionStorage.setItem(key, JSON.stringify(data.value));
    } else {
      sessionStorage.removeItem(key);
    }
  });

  return {
    storage,
  };
};
