import React, { useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Form } from "react-bootstrap";
import { locationLevels } from "../constants/locationLevels";
import { reports } from "../constants/reports";
import { FieldWrapper } from "./FieldWrapper";
import { LocationLevel } from '../types'

const rules = {
  required: "Location level must be set",
};

const LocationLevelField: React.FC = () => {
  const { control, watch } = useFormContext();
  const reportId = watch("report");
  const currentReport = useMemo(
    () => reports.find(report => report.id === reportId),
    [reportId]
  );

  if (currentReport?.hasLocationLevel) {
    return (
      <FieldWrapper name="locationLevel" label="Location Level" sm={6}>
        <Controller
          rules={rules}
          as={
            <Form.Control as="select" key="name-select">
              {locationLevels.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </Form.Control>
          }
          control={control}
          name="locationLevel"
          defaultValue={LocationLevel.Prefecture}
          key="name"
        />
      </FieldWrapper>
    );
  }

  return null;
};

export { LocationLevelField };
