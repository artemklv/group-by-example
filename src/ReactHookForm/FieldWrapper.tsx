import React from "react";
import { get } from "lodash";
import { Form, Col } from "react-bootstrap";
import { useFormContext } from "react-hook-form";

interface Props {
  name: string;
  label: string;
  children: React.ReactElement | React.ReactElement[];
  sm?: number;
}

const FieldWrapper: React.FC<Props> = ({ name, label, children, ...rest }) => {
  const { errors, formState } = useFormContext();

  const isTouched = get(formState.touched, name);
  const error = get(errors, name);
  const isInvalid = Boolean(error) && (isTouched || formState.isSubmitted);

  return (
    <Form.Group controlId={name} as={Col} {...rest}>
      <Form.Label>{label}</Form.Label>
      {React.Children.toArray(children)
        .filter(child => React.Children.only(child))
        .map(child =>
          React.cloneElement(child as React.ReactElement, {
            // ...(children.props as object),
            isInvalid
          })
        )}
      {isInvalid && (
        <Form.Control.Feedback type="invalid">
          {error.message}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

export { FieldWrapper };
