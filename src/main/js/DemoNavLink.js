// @flow
import React from "react";
import { NavLink } from "@scm-manager/ui-components";

export default class DemoNavLink extends React.Component<> {
  render() {
    return <NavLink to="/admin/demo" icon="fas fa-paint-brush" label="Demo" />;
  }
}
