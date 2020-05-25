import React from "react";

interface Props {
  onSubmit: (data: unknown) => Promise<void>;
}

const FormikForm: React.FC<Props> = ({ onSubmit }) => {
  return <h1>Formik form are here</h1>;
};

export { FormikForm };
