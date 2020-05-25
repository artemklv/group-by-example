import React from "react";
import { Form } from "react-bootstrap";
import { UseFieldConfig } from "react-final-form";
import { FieldWrapper } from "./FieldWrapper";
import { GroupByForm } from "../types";

const name = "name";
const label = "Name";

function validate(value: string, values: any): void | string {
  if (Number(values?.step) === 3) {
    if (Boolean(value) === false) {
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

const config: UseFieldConfig<string> = {
  validate,
  initialValue: ""
};

const NameField: React.FC = () => {
  return (
    <FieldWrapper name={name} label={label} config={config}>
      <Form.Control key="name" />
    </FieldWrapper>
  );
};

export { NameField };
