import React from "react";
import { Button, Form, Col } from "react-bootstrap";
import { useFormikContext } from "formik";
import { GroupByForm } from "../types";

const ConfirmControl: React.FC = () => {
  const {
    isValid,
    values: { step },
    setFieldValue,
    errors
  } = useFormikContext<GroupByForm>();

  console.log(isValid, errors);

  const handleNextClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setFieldValue("step", step + 1);
  };

  const handlePrevClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setFieldValue("step", step - 1);
  };

  return (
    <Form.Row>
      <Col>
        {step > 1 && (
          <Button variant="link" onClick={handlePrevClick}>
            back
          </Button>
        )}
        {step === 3 ? (
          <Button variant="success" type="submit">
            Schedule
          </Button>
        ) : (
          <Button
            disabled={isValid === false}
            variant="primary"
            onClick={handleNextClick}
          >
            Continue
          </Button>
        )}
      </Col>
    </Form.Row>
  );
};

export { ConfirmControl };
