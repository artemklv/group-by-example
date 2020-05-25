import React from "react";
import { UseFieldConfig, useFormState } from "react-final-form";
import { FieldWrapper } from "./FieldWrapper";
import { Form } from "react-bootstrap";
import { products } from "../constants/products";
import { GroupByForm, Product } from "../types";

const config: UseFieldConfig<Product> = {
  validate: (value: string) => {
    if (Boolean(value) === false) {
      return "product must be selected";
    }
  }
};

const ProductField: React.FC = () => {
  const formState = useFormState<GroupByForm>();
  return (
    <FieldWrapper name="product" label="Product" sm={6} config={config}>
      <Form.Control
        disabled={formState.values.step > 1}
        as="select"
        key="name-select"
      >
        <option value="">Select product</option>
        {products.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </Form.Control>
    </FieldWrapper>
  );
};

export { ProductField };
