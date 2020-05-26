import React from "react";
import { Form } from "react-bootstrap";
import { products } from "../constants/products";
import { FieldWrapper } from "./FieldWrapper";
import { Product } from "../types";

const ProductField: React.FC = () => {
  return (
    <FieldWrapper<Product> name="product" label="Product" sm={6}>
      <Form.Control as="select">
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
