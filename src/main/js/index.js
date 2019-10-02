// @flow
import React from "react";
import { Route } from "react-router-dom";
import { binder } from "@scm-manager/ui-extensions";
import DemoNavLink from "./DemoNavLink";
import DemoPage from "./DemoPage";

const DemoRoute = () => {
  return <Route path="/admin/demo" render={() => <DemoPage />} />;
};

binder.bind("admin.route", DemoRoute);

binder.bind("admin.navigation", DemoNavLink);
