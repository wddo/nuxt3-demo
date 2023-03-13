import { UnwrapRef } from "nuxt/dist/app/compat/capi";
import { store } from "~~/app/store";

export const useSessionStorage = <T extends Object>(
  key: string,
  defaultValue?: UnwrapRef<T | null>
) => {
  // 기존 sessionStorage 없고 앱 첫 진입이면 defaultValue
  const sessionValue = sessionStorage.getItem(key);
  const storage = <Ref<T | null>>(
    ref(
      !sessionValue || !store.initial ? defaultValue : JSON.parse(sessionValue)
    )
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
