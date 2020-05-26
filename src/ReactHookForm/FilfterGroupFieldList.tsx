import React, { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import {
  useFieldArray,
  useFormContext,
  ArrayField,
  Controller
} from "react-hook-form";
import { FieldWrapper } from "./FieldWrapper";
import { FilterGroup } from "../types";

const defaultFilterGroup: FilterGroup = {
  name: "",
  domain: ""
};

const nameRules = {
  required: "Filter Group Name must be set",
  minLength: {
    value: 5,
    message: "Filter Group Name can't be less than 5 characters"
  },
  maxLenght: {
    value: 5,
    message: "Filter Group Name can't be more than 5 characters"
  }
};

const domainRules = {
  required: "Domain must be set",
  minLength: {
    value: 5,
    message: "Domain can't be less than 5 characters"
  },
  maxLenght: {
    value: 5,
    message: "Domain can't be more than 5 characters"
  }
};

interface FilterGroupFieldProps {
  filterGroup: Partial<ArrayField<FilterGroup>>;
  index: number;
  remove: (index: number) => void;
}

const FilterGroupField: React.FC<FilterGroupFieldProps> = ({
  filterGroup,
  index,
  remove
}) => {
  const { control } = useFormContext();
  const handleRemove = (e: React.MouseEvent) => {
    e.preventDefault();
    remove(index);
  };

  return (
    <Form.Group>
      <Form.Row>
        <FieldWrapper name={`filterGroups[${index}].name`} label="Name">
          <Controller
            name={`filterGroups[${index}].name`}
            rules={nameRules}
            as={<Form.Control key={`${filterGroup.id}.name`} />}
            control={control}
            defaultValue={filterGroup.name}
            key="name"
          />
        </FieldWrapper>
        <FieldWrapper name={`filterGroups[${index}].domain`} label="Domain">
          <Controller
            name={`filterGroups[${index}].domain`}
            rules={domainRules}
            as={<Form.Control key={`${filterGroup.id}.domain`} />}
            control={control}
            defaultValue={filterGroup.domain}
            key="name"
          />
        </FieldWrapper>
        <Button variant="link" onClick={handleRemove}>
          Remove
        </Button>
      </Form.Row>
    </Form.Group>
  );
};

const FilterGroupFieldList: React.FC = () => {
  const { fields, append, remove } = useFieldArray<FilterGroup>({
    name: "filterGroups"
  });

  useEffect(() => {
    append([defaultFilterGroup]);
  }, [append]);

  const handleFieldGroupAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    append(defaultFilterGroup);
  };

  return (
    <>
      {fields.map((field, index) => (
        <FilterGroupField
          key={field.id}
          index={index}
          remove={remove}
          filterGroup={field}
        />
      ))}
      <Form.Group>
        <Form.Row>
          <Button onClick={handleFieldGroupAdd} type="submit" variant="primary">
            Add filter group
          </Button>
        </Form.Row>
      </Form.Group>
    </>
  );
};

export { FilterGroupFieldList };
