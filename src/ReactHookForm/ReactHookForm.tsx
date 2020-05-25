import React from "react";
import { useForm, FormContext } from "react-hook-form";
import { Form } from "react-bootstrap";
import { GroupByForm } from "../types";
import { NameField } from "./NameField";
import { ProductField } from "./ProductField";
import { DevTool } from "react-hook-form-devtools";
import { ConfirmConrol } from "./ConfirmControl";
import { ReportField } from "./ReportField";
import { LocationLevelField } from "./LocationLevelField";
import { TimeGroupingField } from "./TimeGroupingField";

interface Props {
  onSubmit: (data: unknown) => Promise<void>;
}

const ReactHookForm: React.FC<Props> = ({ onSubmit }) => {
  const methods = useForm<GroupByForm>({
    reValidateMode: "onChange",
    validateCriteriaMode: "firstError",
    mode: "onChange",
    defaultValues: {
      step: 1
    }
  });

  const step = methods.watch("step");

  return (
    <FormContext {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <Form.Row>
          <NameField />
        </Form.Row>
        <Form.Row>
          <ProductField />
          {step > 1 && <ReportField />}
        </Form.Row>
        {step > 2 && (
          <Form.Row>
            <LocationLevelField />
            <TimeGroupingField />
          </Form.Row>
        )}
        <ConfirmConrol />
      </Form>
      <DevTool control={methods.control} />
    </FormContext>
  );
};

export { ReactHookForm };
