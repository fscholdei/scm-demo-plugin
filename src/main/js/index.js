// @flow
import React from "react";
import { Route } from "react-router-dom";
import { binder } from "@scm-manager/ui-extensions";
import type { Links } from "@scm-manager/ui-types";
import DemoNavLink from "./DemoNavLink";
import DemoPage from "./DemoPage";

type PredicateProps = {
  links: Links
};

const Route = ({ links }) => {
  return (
    <Route
      path="/admin/demo"
      render={() => (
        <DemoPage />
      )}
    />
  );
};

binder.bind("admin.route", Route);

binder.bind("admin.navigation", DemoNavLink);
