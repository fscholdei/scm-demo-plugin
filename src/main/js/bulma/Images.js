// @flow
import React from "react";

export default class Images extends React.Component<> {
  render() {
    return (
      <section className="section" id="images">
        <h1 className="title"> Images </h1>
        <hr />
        <figure className="image is-128x128">
          <img
            src="https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg"
            alt="zeldman"
          />
        </figure>
      </section>
    );
  }
}
