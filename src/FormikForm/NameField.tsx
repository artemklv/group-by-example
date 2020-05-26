import React from "react";
import { Form } from "react-bootstrap";
import { FieldWrapper } from "./FieldWrapper";

const name = "name";
const label = "Name";

const NameField: React.FC = () => {
  return (
    <FieldWrapper name={name} label={label} defaultValue="">
      <Form.Control key="name" />
    </FieldWrapper>
  );
};

export { NameField };
