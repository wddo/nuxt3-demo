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

  const { storage } = useSessionStorage<{ page: number }>(
    "product-list-state",
    { page: 1 }
  );

  const getProducts = async () => {
    products.data = await fetchProductList(storage.value!.page);
  };

  const increment = () => {
    storage.value = { page: storage.value!.page + 1 };
    getProducts();
  };

  return {
    products,
    getProducts,
    increment,
  };
};
