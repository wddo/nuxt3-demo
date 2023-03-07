import { UnwrapRef } from "nuxt/dist/app/compat/capi";

export const useSessionStorage = <T extends Object>(
  key: string,
  defaultValue?: UnwrapRef<T>
) => {
  // 기존 sessionStorage 있으면 그것 없으면 defaultValue
  const sessionValue = sessionStorage.getItem(key);
  const storage = ref(!sessionValue ? defaultValue : JSON.parse(sessionValue));

  watch(
    storage,
    (value, oldValue, onCleanup) => {
      // 기존 sessionStorage
      const sessionValue = sessionStorage.getItem(key);
      const storageData = sessionValue ? JSON.parse(sessionValue) : null;

      if (value) {
        // 병합
        sessionStorage.setItem(
          key,
          JSON.stringify({ ...storageData, ...value })
        );
      } else {
        // 제거
        sessionStorage.removeItem(key);
      }
    },
    { immediate: true }
  );

  return {
    storage,
  };
};
