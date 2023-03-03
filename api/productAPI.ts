export const fetchProductList = async (page: number) => {
  const res = await fetch(
    `https://techcrunch.com/wp-json/wp/v2/posts?per_page=${
      page * 10
    }&context=embed`
  );
  const data = await res.json();

  return data;
};
