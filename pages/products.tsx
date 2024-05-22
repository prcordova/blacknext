import Head from "next/head";
import { GetStaticProps, NextPage } from "next";
import Header from "@/src/components/Header";
import { Container } from "reactstrap";
import ProductsList from "@/src/components/ProductsList";
import { ProductType, fetchProducts } from "@/src/services/products";
import { ReactNode } from "react";

export const getStaticProps: GetStaticProps = async () => {
  const products = await fetchProducts();

  return { props: { products } };
};
const Products: NextPage = (props: {
  children?: ReactNode;
  products?: ProductType[];
}) => {
  return (
    <>
      <Head>
        <title>Nossos Produtos</title>
        <meta name="description" content="Conheça todos os nossos produtos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Container className="mb-5">
          <h1 className="my-5">Nossos Produtos</h1>

          {<ProductsList products={props.products!} />}
        </Container>
      </main>
    </>
  );
};

export default Products;
