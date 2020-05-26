import React from "react";
import { Formik, FormikErrors } from "formik";
import { Form } from 'react-bootstrap'
import { NameField } from './NameField'
import { ProductField } from './ProductField'
import { ReportField } from './ReportField'
import { LocationLevelField } from './LocationLevelField'
import { TimeGroupingField } from './TimeGroupingField'
import { ConfirmControl } from './ConfirmControl'
import { GroupByForm } from "../types";

interface Props {
  onSubmit: (data: unknown) => Promise<void>;
}

const initialValues = {
  step: 1
} as GroupByForm;

// We need to validate all values in one place, because of validate function in useFeild acceps only value 
async function validate(values: GroupByForm): Promise<FormikErrors<GroupByForm>> {
  const errors: FormikErrors<GroupByForm> = {};
  if (Boolean(values.product) === false) {
    errors.product = "Product must be selected";
  }

  if (values.step > 1) {
    if (Boolean(values.report) === false) {
      errors.report = "Report must be set";
    } 
  }

  if (values.step === 3) {
    if (Boolean(values.name) === false) {
      errors.name = `Name is required`;
    }
    if (Number(values.name?.length) < 10) {
      errors.name = `Name can't be less than 10 charaters`;
    }
    if (Number(values?.name?.length) > 250) {
      errors.name = `Name can't contain more than 250 charaters`;
    }
  }
  return errors;
}

const FormikForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Formik<GroupByForm>
      onSubmit={onSubmit}
      initialValues={initialValues}
      validate={validate}
      validateOnMount={true}
    >
      {({handleSubmit, values: {step}}) => (
        <form onSubmit={handleSubmit}>
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
        </form>
      )}
    </Formik>
  );
};

export { FormikForm };
