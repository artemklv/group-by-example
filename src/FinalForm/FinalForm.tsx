import React from "react";
import { Form as FForm } from "react-final-form";
import { Form } from "react-bootstrap";
import { NameField } from "./NameField";
import { ProductField } from "./ProductField";
import { ReportField } from "./ReportField";
import { TimeGroupingField } from "./TimeGroupingField";
import { LocationLevelField } from "./LocationLevelField";
import { ConfirmControl } from "./ConfirmContorl";
import { GroupByForm } from "../types";

const initialValues = {
  step: 1
} as GroupByForm;

interface Props {
  onSubmit: (data: unknown) => Promise<void>;
}

const FinalForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <FForm<GroupByForm> onSubmit={onSubmit} initialValues={initialValues}>
      {({ values: { step }, handleSubmit, form }) => (
        <Form onSubmit={handleSubmit}>
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
          <ConfirmControl />
        </Form>
      )}
    </FForm>
  );
};

export { FinalForm };
