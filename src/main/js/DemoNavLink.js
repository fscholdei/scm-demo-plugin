// @flow
import React from "react";
import { NavLink, SubNavigation } from "@scm-manager/ui-components";

export default class DemoNavLink extends React.Component<> {
  render() {
    return (
      <SubNavigation to="/admin/demo/" icon="fas fa-paint-brush" label="Demo">
        <NavLink to="/admin/demo/bulma" label="Bulma Demo" />
        <NavLink to="/admin/demo/styleguide" label="Styleguide" />
        <NavLink to="/admin/demo/sandbox" label="Sandbox" />
      </SubNavigation>
    );
  }
}
