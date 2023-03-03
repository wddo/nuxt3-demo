import { fetchProductList } from "~~/api/productAPI";

type Prodcut = {
  id: number;
  [key: string]: any;
};

export const useProductList = () => {
  const page = ref(1);
  const products: {
    data: Prodcut[];
  } = reactive({
    data: [],
  });

  const getProducts = async () => {
    products.data = await fetchProductList(page.value);
  };

  const increment = () => {
    page.value += 1;

    getProducts();
    savePage();
  };

  const savePage = () => {
    sessionStorage.setItem(
      "product-list-state",
      JSON.stringify({
        page: page.value,
      })
    );
  };

  return {
    products,
    getProducts,
    increment,
  };
};
