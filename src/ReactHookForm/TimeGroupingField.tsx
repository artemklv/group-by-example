import React, { useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Form } from "react-bootstrap";
import { timeGroupings } from "../constants/timeGrouping";
import { reports } from "../constants/reports";
import { FieldWrapper } from "./FieldWrapper";
import { TimeGrouping } from '../types'

const rules = {
  required: `Time grouping must be set`
};

const TimeGroupingField: React.FC = () => {
  const { control, watch } = useFormContext();
  const reportId = watch("report");
  const currentReport = useMemo(
    () => reports.find(report => report.id === reportId),
    [reportId]
  );

  if (currentReport?.hasTimeGrouping) {
    return (
      <FieldWrapper name="timeGrouping" label="Time Grouping" sm={6}>
        <Controller
          rules={rules}
          as={
            <Form.Control as="select" key="time-grouping-select">
              {timeGroupings.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </Form.Control>
          }
          control={control}
          name="timeGrouping"
          defaultValue={TimeGrouping.Month}
          key="name"
        />
      </FieldWrapper>
    );
  }

  return null;
};

export { TimeGroupingField };
