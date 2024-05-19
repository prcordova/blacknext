import Head from "next/head";
import { NextPage } from "next";

const Products: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nossos Produtos</title>
        <meta name="description" content="Conheça todos os nossos produtos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Nossos Produtos</h1>
      </main>
    </>
  );
};

export default Products;
