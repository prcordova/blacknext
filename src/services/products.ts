export type ProductType = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  inStock: number;
};

export const fetchProducts = async () => {
  const products: ProductType[] = await fetch(
    `${process.env.NEXT_PUBLIC_APIURL}/api/products`
  ).then((response) => response.json());
  return products;
};

export const fetchProduct = async (id: string | number) => {
  const product: ProductType = await fetch(
    `${process.env.NEXT_PUBLIC_APIURL}/api/products/${id}`
  ).then((response) => response.json());
  return product;
};
