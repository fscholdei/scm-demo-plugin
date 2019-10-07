// @flow
import React from "react";
import Color from "./styleguide/Color";
import Navbar from "./styleguide/Navbar";
import Button from "./styleguide/Button";
import Miscellaneous from "./styleguide/Miscellaneous";

export default class Styleguide extends React.Component<> {
  render() {
    return (
      <>
        <Color />
        <Navbar />
        <Button />
        <Miscellaneous />
      </>
    );
  }
}
