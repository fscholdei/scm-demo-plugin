// @flow
import React from "react";

export default class Icons extends React.Component<> {
  render() {
    return (
      <section className="section" id="icon">
        <h1 className="title"> Icons </h1>
        <hr />
        <span className="icon is-small">
          <i className="fas fa-home"> </i>
        </span>
        <span className="icon">
          <i className="fas fa-home"> </i>
        </span>
        <span className="icon is-medium">
          <i className="fas fa-home"> </i>
        </span>
        <span className="icon is-large">
          <i className="fas fa-home"> </i>
        </span>
      </section>
    );
  }
}
