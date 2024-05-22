import { baseUrl } from "./api";

export type ProductType = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  inStock: number;
};

export const fetchProducts = async () => {
  try {
    const products: ProductType[] = await fetch(`${baseUrl}/api/products`).then(
      (response) => response.json()
    );
    return products;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
};

export const fetchProduct = async (id: string | number) => {
  try {
    const product: ProductType = await fetch(
      `${baseUrl}/api/products/${id}`
    ).then((response) => response.json());
    return product;
  } catch (error) {
    console.error(`Failed to fetch product with id ${id}:`, error);
    throw error;
  }
};
