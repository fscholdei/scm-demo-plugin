// @flow
import React from "react";

export default class Panel extends React.Component<> {
  render() {
    return (
      <section className="section" id="panel">
        <h1 className="title">Panel</h1>
        <hr />
        <div className="column is-4">
          <nav className="panel">
            <p className="panel-heading"> Repositories </p>
            <div className="panel-block">
              <p className="control has-icons-left">
                <input
                  className="input is-small"
                  type="text"
                  placeholder="Search"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-search" />
                </span>
              </p>
            </div>
            <p className="panel-tabs">
              <a className="is-active">All</a>
              <a>Public</a>
              <a>Private</a>
              <a>Sources</a>
              <a>Forks</a>
            </p>
            <a className="panel-block is-active">
              <span className="panel-icon">
                {" "}
                <i className="fas fa-book" />{" "}
              </span>{" "}
              bulma{" "}
            </a>
            <a className="panel-block">
              <span className="panel-icon">
                {" "}
                <i className="fas fa-book" />{" "}
              </span>{" "}
              marksheet{" "}
            </a>
            <a className="panel-block">
              <span className="panel-icon">
                {" "}
                <i className="fas fa-book" />{" "}
              </span>{" "}
              minireset.css{" "}
            </a>
            <a className="panel-block">
              <span className="panel-icon">
                {" "}
                <i className="fas fa-book" />{" "}
              </span>{" "}
              jgthms.github.io{" "}
            </a>
            <a className="panel-block">
              <span className="panel-icon">
                {" "}
                <i className="fas fa-code-fork" />{" "}
              </span>{" "}
              daniellowtw/infBoard{" "}
            </a>
            <a className="panel-block">
              <span className="panel-icon">
                {" "}
                <i className="fas fa-code-fork" />{" "}
              </span>{" "}
              mojs{" "}
            </a>
            <label className="panel-block">
              <input type="checkbox" /> Remember me{" "}
            </label>
            <div className="panel-block">
              <button className="button is-primary is-outlined is-fullwidth">
                {" "}
                Reset all filters
              </button>
            </div>
          </nav>
        </div>
      </section>
    );
  }
}
