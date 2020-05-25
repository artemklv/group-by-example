import React, { useMemo } from "react";
import { UseFieldConfig, useFormState } from "react-final-form";
import { Form } from "react-bootstrap";
import { reports } from "../constants/reports";
import { FieldWrapper } from "./FieldWrapper";
import { GroupByForm } from "../types";

const config: UseFieldConfig<string> = {
  validate: (value: string) => {
    if (Boolean(value) === false) {
      return "report must be selected";
    }
  }
};

const ReportField: React.FC = () => {
  const {
    values: { product, step }
  } = useFormState<GroupByForm>();
  const currentReports = useMemo(
    () => reports.filter(report => report.product === product),
    [product]
  );
  return (
    <FieldWrapper name="report" label="Report" sm={6} config={config}>
      <Form.Control disabled={step > 2} as="select">
        <option value="">Select report</option>
        {currentReports.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </Form.Control>
    </FieldWrapper>
  );
};

export { ReportField };
