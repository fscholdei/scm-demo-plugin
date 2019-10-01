// @flow
import React from "react";
import { translate } from "react-i18next";
import { NavLink } from "@scm-manager/ui-components";

export default class DemoNavLink extends React.Component<> {
  render() {
    const { t } = this.props;

    return (
      <NavLink
        to="/admin/demo"
        icon="fas fa-demo"
        label="Demo"
      />
    );
  }
}
