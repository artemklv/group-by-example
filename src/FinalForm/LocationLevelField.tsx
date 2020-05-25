import React, { useMemo, useEffect } from "react";
import { UseFieldConfig, useFormState } from "react-final-form";
import { Form } from "react-bootstrap";
import { locationLevels } from "../constants/locationLevels";
import { reports } from "../constants/reports";
import { FieldWrapper } from "./FieldWrapper";
import { LocationLevel, GroupByForm } from "../types";

const config: UseFieldConfig<LocationLevel> = {
  validate: (value: LocationLevel) => {
    if (Boolean(value) === false) {
      return "Location level must be set";
    }
  },
  defaultValue: LocationLevel.Region,
};

const LocationLevelField: React.FC = () => {
  const { values: {report}, touched, visited } = useFormState<GroupByForm>();
  const currentReport = useMemo(
    () => reports.find(item => item.id === report),
    [report]
  );

  console.log(touched?.locationLevel, visited?.locationLevel)
  
  if (currentReport?.hasLocationLevel) {
    return (
      <FieldWrapper name="locationLevel" label="Location Level" sm={6} config={config}>
        <Form.Control as="select" key="name-select">
          {locationLevels.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </Form.Control>
      </FieldWrapper>
    );
  }
  return null;
};

export { LocationLevelField };
