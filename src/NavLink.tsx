import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Nav } from "react-bootstrap";

interface Props {
  to: string;
  title: string;
}

const NavLink: React.FC<Props> = ({ to, title }) => {
  const {isExact} = useRouteMatch({ path: to }) ?? {};

  return (
    <Nav.Item className={`${Boolean(isExact) ? 'active' : ''}`}>
      <Link className={`nav-link ${Boolean(isExact) ? 'active' : ''}`} to={to}>{title}</Link>
    </Nav.Item>
  );
};

export { NavLink };
