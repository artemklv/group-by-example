import React, { useMemo } from "react";
import { useFormikContext } from 'formik';
import { Form } from "react-bootstrap";
import { timeGroupings } from "../constants/timeGrouping";
import { reports } from "../constants/reports";
import { FieldWrapper } from "./FieldWrapper";
import { TimeGrouping, GroupByForm } from "../types";

function  validate (value: TimeGrouping) {
  if (Boolean(value) === false) {
    return "Time grouping must be set";
  }
};

const TimeGroupingField: React.FC = () => {
  const { values: {report} } = useFormikContext<GroupByForm>();
  const currentReport = useMemo(
    () => reports.find(item => item.id === report),
    [report]
  );
  if (currentReport?.hasTimeGrouping) {
    return (
      <FieldWrapper 
        name="timeGrouping" 
        label="Time Grouping" 
        sm={6} 
        validate={validate} 
        defaultValue={TimeGrouping.Month}
      >
        <Form.Control as="select" key="time-grouping-select">
          {timeGroupings.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </Form.Control>
      </FieldWrapper>
    )
  }
  return null;
};

export { TimeGroupingField };
