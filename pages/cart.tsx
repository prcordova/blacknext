import Head from "next/head";
import { NextPage } from "next";
import Header from "@/src/components/Header";
import { Container } from "reactstrap";
import CartTable from "@/src/components/CartTable";
import CartTotal from "@/src/components/CartTotal";

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
        <Container className="mb-5">
          <h1 className="my-5">Carrinho</h1>

          <CartTable />
          <CartTotal />
        </Container>
      </main>
    </>
  );
};

export default Cart;
