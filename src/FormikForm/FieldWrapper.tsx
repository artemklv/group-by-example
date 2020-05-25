import React from "react";
import { useField, UseFieldConfig } from "react-final-form";
import { Form, Col } from "react-bootstrap";

interface Props {
  name: string;
  label: string;
  sm?: number;
  children: React.ReactElement | React.ReactElement[];
  config?: UseFieldConfig<any>;
}

const FieldWrapper: React.FC<Props> = ({
  name,
  label,
  children,
  sm,
  config
}) => {
  const { input, meta } = useField(name, config);
  const isInvalid = Boolean(meta.error) && meta.touched;

  return (
    <Form.Group controlId={name} as={Col} sm={sm}>
      <Form.Label>{label}</Form.Label>
      {React.Children.toArray(children)
        .filter(child => React.Children.only(child))
        .map(child =>
          React.cloneElement(child as React.ReactElement, {
            ...input,
            isInvalid
          })
        )}
      {isInvalid && (
        <Form.Control.Feedback type="invalid">
          {meta.error}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

export { FieldWrapper };
