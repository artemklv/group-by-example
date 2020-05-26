import React, { useEffect } from "react";
import { useField, useFormikContext } from "formik";
import { Form, Col } from "react-bootstrap";
import { TimeGrouping } from "../types";

interface Props<V extends any = any> {
  name: string;
  label: string;
  sm?: number;
  defaultValue?: V;
  children: React.ReactElement | React.ReactElement[];
  validate?: (value: V) => string | void;
}

function FieldWrapper<V>({
  name,
  label,
  children,
  sm,
  defaultValue,
  validate
}: Props<V>) {
  const {submitCount} = useFormikContext();
  const [{ value, onChange }, { error, touched }, {setTouched}] = useField<TimeGrouping>({
    name,
    defaultValue: defaultValue as any,
    validate
  });

  // fix tuched prop on dynamic field
  useEffect(() => {
    return () => {
      setTouched(false);
    }
  }, []);
  
  const hasError = Boolean(error) && ((touched) || Boolean(submitCount));

  return (
    <Form.Group controlId={name} as={Col} sm={sm}>
      <Form.Label>{label}</Form.Label>
      {React.Children.toArray(children)
        .filter(child => React.Children.only(child))
        .map(child =>
          React.cloneElement(child as React.ReactElement, {
            value: value ?? defaultValue,
            onChange,
            isInvalid: hasError,
          })
        )}
      {hasError && (
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      )}
    </Form.Group>
  );
}

export { FieldWrapper };
