import { UnwrapRef } from "nuxt/dist/app/compat/capi";
import { context } from "~~/app/store";

export const useSessionStorage = <T extends Object>(
  key: string,
  defaultValue?: UnwrapRef<T>
) => {
  // 기존 sessionStorage 없고 앱 첫 진입이면 defaultValue
  const sessionValue = sessionStorage.getItem(key);
  const storage = ref(
    !sessionValue || !context.initial ? defaultValue : JSON.parse(sessionValue)
  );

  watchEffect(() => {
    if (storage.value) {
      sessionStorage.setItem(key, JSON.stringify(storage.value));
    } else {
      sessionStorage.removeItem(key);
    }
  });

  return {
    storage,
  };
};
