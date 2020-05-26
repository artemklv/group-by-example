import React, { useMemo } from "react";
import { useFormikContext } from "formik";
import { Form } from "react-bootstrap";
import { reports } from "../constants/reports";
import { FieldWrapper } from "./FieldWrapper";
import { Product, GroupByForm } from "../types";

const ReportField: React.FC = () => {
  const {
    values: { product }
  } = useFormikContext<GroupByForm>();
  const currentReports = useMemo(
    () => reports.filter(report => report.product === product),
    [product]
  );
  return (
    <FieldWrapper<Product> name="report" label="Report" sm={6}>
      <Form.Control as="select">
        <option value="">Select product</option>
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
