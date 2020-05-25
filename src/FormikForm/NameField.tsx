import React from "react";
import { Form } from "react-bootstrap";
import { FieldWrapper } from "./FieldWrapper";
import { GroupByForm } from "../types";

const name = "name";
const label = "Name";

function validate(value: string, values: GroupByForm): void | string {
  if (values.step === 3) {
    if (value.length === 0) {
      return `Name is required`;
    }
    if (value.length < 10) {
      return `Name can't be less than 10 charaters`;
    }
    if (value.length > 250) {
      return `Name can't contain more than 250 charaters`;
    }
  }
}

const config = {
  validate
};

const NameField: React.FC = () => {
  return (
    <FieldWrapper name={name} label={label} config={config}>
      <Form.Control key="name" />
    </FieldWrapper>
  );
};

export { NameField };
