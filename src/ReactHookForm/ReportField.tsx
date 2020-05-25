import React, { useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Form } from "react-bootstrap";
import { reports } from "../constants/reports";
import { FieldWrapper } from "./FieldWrapper";
import { GroupByForm } from "../types";

const rules = {
  validate: (value: string) => {
    if (value.length === 0) {
      return "report must be selected";
    }
  }
};

const ReportField: React.FC = () => {
  const { watch } = useFormContext<GroupByForm>();
  const step = watch("step");
  const product = watch("product");
  const currentReports = useMemo(
    () => reports.filter(report => report.product === product),
    [product]
  );

  return (
    <FieldWrapper name="report" label="Report" sm={6}>
      <Controller
        rules={rules}
        as={
          <Form.Control disabled={step > 2} as="select">
            <option value="">Select report</option>
            {currentReports.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </Form.Control>
        }
        name="report"
        defaultValue=""
      />
    </FieldWrapper>
  );
};

export { ReportField };
