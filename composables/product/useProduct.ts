import { fetchProductList } from "~~/api/productAPI";

type Prodcut = {
  id: number;
  [key: string]: any;
};

export const useProductList = () => {
  const products: {
    data: Prodcut[];
  } = reactive({
    data: [],
    isLoading: false,
  });

  const didCancel = ref(false);
  const { scroll } = useScrollPosition();
  const { storage } = useSessionStorage<{ page: number; scrollY: number }>(
    "product-state",
    { page: 1, scrollY: 0 }
  );

  const getProducts = async () => {
    didCancel.value = false;

    const res = await fetchProductList(storage.value!.page);

    if (!didCancel.value) products.data = res;
  };

  const increment = () => {
    const { page } = storage.value;
    const { y } = scroll;
    storage.value = { page: page + 1, scrollY: y };
  };

  watch(
    storage,
    async (value, oldValue, onCleanup) => {
      if (value) {
        await getProducts();

        const { scrollY } = storage.value;
        window.scrollTo({ top: scrollY ?? 0 });
      }

      onCleanup(() => {
        didCancel.value = true;
      });
    },
    { flush: "post", immediate: true }
  );

  return {
    products,
    increment,
    storage,
  };
};
