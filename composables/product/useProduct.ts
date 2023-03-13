import { fetchProductList } from "~~/api/productAPI";

type Prodcut = {
  id: number;
  [key: string]: unknown;
};

export const useProductList = (storage: Ref) => {
  const products: {
    data: Prodcut[];
  } = reactive({
    data: [],
    isLoading: false,
  });

  const didCancel = ref(false);

  const getProducts = async () => {
    const res = await fetchProductList(storage.value!.page);

    return res;
  };

  const increment = () => {
    const { page } = storage.value;

    storage.value = { page: page + 1 };
  };

  watch(
    storage,
    async (value, oldValue, onCleanup) => {
      didCancel.value = false;

      if (value) {
        const data = await getProducts();

        if (!didCancel.value) products.data = data;
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
  };
};
