import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { Button, Form, Col } from "react-bootstrap";
import { GroupByForm } from "../types";

const ConfirmConrol: React.FC = () => {
  const { formState, setValue, watch, register } = useFormContext<
    GroupByForm
  >();

  useEffect(() => {
    register({ name: "step" });
  }, [register]);

  const step = watch("step");
  const handleNextClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setValue("step", step + 1);
  };

  const handlePrevClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setValue("step", step - 1);
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
          // Here was an error in react-bootstrap/Button component, so i used native one
          <Button variant="success" type="submit">
            Schedule
          </Button>
        ) : (
          <Button
            disabled={formState.isValid === false}
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

export { ConfirmConrol };
