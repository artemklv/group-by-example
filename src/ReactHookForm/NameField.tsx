import React, { useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FieldWrapper } from "./FieldWrapper";
import { Form } from "react-bootstrap";
import { GroupByForm } from "../types";

const name = "name";
const label = "Name";

const NameField: React.FC = () => {
  const { control, getValues } = useFormContext<GroupByForm>();
  const rules = useMemo(() => {
    return {
      validate: (value: string) => {
        if (getValues().step === 3) {
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
    };
  }, [getValues]);
  return (
    <FieldWrapper name={name} label={label}>
      <Controller
        name={name}
        rules={rules}
        as={<Form.Control key="name" />}
        control={control}
        defaultValue=""
        key="name"
      />
    </FieldWrapper>
  );
};

export { NameField };
