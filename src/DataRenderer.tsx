import React from "react";
import { Row } from "react-bootstrap";

interface Props {
  data: unknown;
}

const DataRenderer: React.FC<Props> = ({ data }) => {
  if (Boolean(data) === false) {
    return null;
  }
  return (
    <Row>
      <pre style={{ textAlign: "left" }}>{JSON.stringify(data, null, 2)}</pre>
    </Row>
  );
};

export { DataRenderer };
