// @flow
import React from "react";
import { Link } from "react-router-dom";

export default class DemoPage extends React.Component<Props> {
  render() {
    return (
      <>
        <div className="box">
          <article className="media">
            <div className="media-content">
              <div className="content">
                <h3>Bulma Demo</h3>
                <Link to="/admin/demo/bulma">Bulma Demo</Link>
              </div>
            </div>
          </article>
        </div>
        <div className="box">
          <article className="media">
            <div className="media-content">
              <div className="content">
                <h3>Styleguide</h3>
                <Link to="/admin/demo/styleguide">Styleguide</Link>
              </div>
            </div>
          </article>
        </div>
        <div className="box">
          <article className="media">
            <div className="media-content">
              <div className="content">
                <h3>Sandbox</h3>
                <Link to="/admin/demo/sandbox">Sandbox</Link>
              </div>
            </div>
          </article>
        </div>
      </>
    );
  }
}
