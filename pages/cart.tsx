import Head from "next/head";
import { NextPage } from "next";
import Header from "@/src/components/Header";

const Cart: NextPage = () => {
  return (
    <>
      <Head>
        <title>Carrinho</title>
        <meta name="description" content="Meu carrinho de compras" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <h1>Carrinho</h1>
      </main>
    </>
  );
};

export default Cart;
