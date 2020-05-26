import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav } from "react-bootstrap";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { FormikForm } from "./FormikForm";
import { ReactHookForm } from "./ReactHookForm";
import { DataRenderer } from "./DataRenderer";
import { FinalForm } from "./FinalForm";
import { NavLink } from "./NavLink";
import "./styles.css";

export default function App() {
  const [data, setData] = useState<unknown>(null);
  const onSubmit = async (data: unknown) => {
    setData(data);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Example of implementation Group By Form</h1>
        <Container style={{ textAlign: "left" }}>
          <Nav variant="pills">
            <NavLink to="/react-hook-form" title="React Hooks form" />
            <NavLink to="/formik-form" title="Formik form" />
            <NavLink to="/final-form" title="Final form" />
          </Nav>
          <Switch>
            <Route path="/react-hook-form">
              <ReactHookForm onSubmit={onSubmit} />
            </Route>
            <Route path="/formik-form">
              <FormikForm onSubmit={onSubmit} />
            </Route>
            <Route path="/final-form">
              <FinalForm onSubmit={onSubmit} />
            </Route>
          </Switch>
          <DataRenderer data={data} />
        </Container>
      </div>
    </BrowserRouter>
  );
}
