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
  });

  const { scroll } = useScrollPosition();
  const { storage } = useSessionStorage<{ page: number; scrollY: number }>(
    "product-state",
    { page: 1, scrollY: 0 }
  );

  const getProducts = async () => {
    products.data = await fetchProductList(storage.value!.page);
  };

  const increment = () => {
    const { page } = storage.value;
    const { y } = scroll;
    storage.value = { page: page + 1, scrollY: y };

    getProducts();
  };

  watch(
    products,
    () => {
      const { scrollY } = storage.value;
      window.scrollTo({ top: scrollY ?? 0 });
    },
    { flush: "post" }
  );

  return {
    products,
    getProducts,
    increment,
  };
};
