import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";

interface ApiResponse {
  name: string;
  timestamp: string;
}

export const getStaticProps: GetStaticProps = async () => {
  const staticData = await fetch(
    `${process.env.NEXT_PUBLIC_APIURL}/api/hello`
  ).then((res) => res.json());

  return {
    props: {
      staticData,
    },
  };
};

const Static: NextPage = (props: {
  children?: React.ReactNode;
  staticData?: ApiResponse;
}) => {
  const [clientSideData, setClientSideData] = useState<ApiResponse>();

  const fetchData = async () => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/hello`);
    const json = await data.json();
    setClientSideData(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container tag="main">
      <h1 className="my-5">Como funcionam as renderizações do Next.js</h1>
      <Row>
        <Col>
          <h3>Gerado estáticamente durante o build :</h3>
          <p>
            <strong>Nome: {props?.staticData?.name}</strong>
            <br />
            <strong>Timestamp: </strong>
            {props?.staticData?.timestamp.toString()}
          </p>
        </Col>
        <Col>
          <h3>Gerado no cliente</h3>

          <p>
            <strong>Nome:</strong> {clientSideData?.name}
            <br />
            <strong>Timestamp:</strong> {clientSideData?.timestamp.toString()}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Static;
