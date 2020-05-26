import React from "react";
import { Row, Container, Col } from "react-bootstrap";

interface Props {
  data: unknown;
}

const DataRenderer: React.FC<Props> = ({ data }) => {
  if (Boolean(data) === false) {
    return null;
  }
  return (
    <Container
      style={{ marginTop: "1rem", padding: "1rem" }}
      className="bg-light"
    >
      <Row>
        <Col>
          <pre style={{ textAlign: "left" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        </Col>
      </Row>
    </Container>
  );
};

export { DataRenderer };
