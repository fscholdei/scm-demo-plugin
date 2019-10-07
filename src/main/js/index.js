// @flow
import React from "react";
import { Switch, Route } from "react-router-dom";
import { binder } from "@scm-manager/ui-extensions";
import DemoNavLink from "./DemoNavLink";
import BulmaDemo from "./BulmaDemo";
import Styleguide from "./Styleguide";
import Sandbox from "./Sandbox";
import DemoPage from "./DemoPage";

const DemoRoute = () => {
  return (
    <Switch>
      <Route path="/admin/demo/bulma" render={() => <BulmaDemo />} />
      <Route path="/admin/demo/styleguide" render={() => <Styleguide />} />
      <Route path="/admin/demo/sandbox" render={() => <Sandbox />} />
      <Route path="/admin/demo/" render={() => <DemoPage />} />
    </Switch>
  );
};

binder.bind("admin.route", DemoRoute);

binder.bind("admin.navigation", DemoNavLink);
