import React, { useMemo } from "react";
import { useFormikContext} from "formik";
import { Form } from "react-bootstrap";
import { locationLevels } from "../constants/locationLevels";
import { reports } from "../constants/reports";
import { FieldWrapper } from "./FieldWrapper";
import { LocationLevel, GroupByForm } from "../types";

function  validate(value: LocationLevel) {
  if (Boolean(value) === false) {
    return "Location level must be set";
  }
}

const LocationLevelField: React.FC = () => {
  const { values: {report} } = useFormikContext<GroupByForm>();
  const currentReport = useMemo(
    () => reports.find(item => item.id === report),
    [report]
  );

  if (currentReport?.hasLocationLevel) {
    return (
      <FieldWrapper 
        name="locationLevel" 
        label="Location Level" 
        sm={6} 
        validate={validate} 
        defaultValue={LocationLevel.Region}
      >
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
