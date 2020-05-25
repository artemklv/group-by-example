import React from "react";
import { Button, Form, Col } from "react-bootstrap";
import { useField, useFormState } from "react-final-form";

const ConfirmControl: React.FC = () => {
  const { input } = useField("step");
  const formState = useFormState();

  const handleNextClick = (e: React.MouseEvent) => {
    e.preventDefault();
    input.onChange(input.value + 1);
  };

  const handlePrevClick = (e: React.MouseEvent) => {
    e.preventDefault();
    input.onChange(input.value - 1);
  };

  return (
    <Form.Row>
      <Col>
        {input.value > 1 && (
          <Button variant="link" onClick={handlePrevClick}>
            back
          </Button>
        )}
        {input.value === 3 ? (
          <Button variant="success" type="submit">
            Schedule
          </Button>
        ) : (
          <Button
            disabled={formState.valid === false}
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
