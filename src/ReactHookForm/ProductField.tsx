import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Form } from "react-bootstrap";
import { products } from "../constants/products";
import { FieldWrapper } from "./FieldWrapper";

const rules = {
  validate: (value: string) => {
    if (value.length === 0) {
      return "product must be selected";
    }
  }
};

const ProductField: React.FC = () => {
  const { control, watch } = useFormContext();
  const step = watch("step");

  return (
    <FieldWrapper name="product" label="Product" sm={6}>
      <Controller
        rules={rules}
        as={
          <Form.Control disabled={step > 1} as="select" key="name-select">
            <option value="">Select product</option>
            {products.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </Form.Control>
        }
        control={control}
        name="product"
        defaultValue=""
        key="name"
      />
    </FieldWrapper>
  );
};

export { ProductField };
