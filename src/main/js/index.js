// @flow
import React from "react";
import { Route } from "react-router-dom";
import { binder } from "@scm-manager/ui-extensions";
import DemoNavLink from "./DemoNavLink";
import BulmaDemo from "./BulmaDemo";
import Sandbox from "./Sandbox";

const DemoRoute = () => {
  return (
    <>
      <Route path="/admin/demo/bulma" render={() => <BulmaDemo />} />
      <Route path="/admin/demo/sandbox" render={() => <Sandbox />} />
    </>
  );
};

binder.bind("admin.route", DemoRoute);

binder.bind("admin.navigation", DemoNavLink);
