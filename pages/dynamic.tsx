import { baseUrl } from "../src/services/api";
import { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";

interface ApiResponse {
  name: string;
  timestamp: string;
}
export const getServerSideProps: GetServerSideProps = async () => {
  const serverSideData: ApiResponse = await fetch(`${baseUrl}/api/hello`).then(
    (res) => res.json()
  );
  return {
    props: {
      serverSideData,
    },
  };
};
const Dynamic: NextPage = (props: {
  children?: React.ReactNode;
  serverSideData?: ApiResponse;
}) => {
  const [clientSideData, setClientSideData] = useState<ApiResponse>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("/api/hello");
    const json = await data.json();
    setClientSideData(json);
  };
  return (
    <Container tag="main">
      <h1 className="my-5">Como funcionam as renderizações do Next.js</h1>
      <Row>
        <Col>
          <h3>Gerado no servidor:</h3>

          <p>
            <strong>Nome:</strong> {props.serverSideData?.name}
            <br />
            <strong>Timestamp:</strong>{" "}
            {props.serverSideData?.timestamp.toString()}
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

export default Dynamic;
