// @flow
import React from "react";
import injectSheet from "react-jss";
import classNames from "classnames";
import { Subtitle, Title } from "@scm-manager/ui-components";

type Props = {
  classes: any
};

const styles = {
  c01: {
    "& .button": {
      fontWeight: "400"
    }
  },
  primary: {
    backgroundColor: "#11dfd0 !important"
  },
  link: {
    backgroundColor: "#33b2e8 !important"
  },
  info: {
    backgroundColor: "#33b2e8 !important"
  },
  success: {
    backgroundColor: "#00c79b !important"
  },
  warning: {
    backgroundColor: "#ffdd57 !important"
  },
  danger: {
    backgroundColor: "#ff3860 !important"
  }
};

class Sandbox extends React.Component<Props> {
  render() {
    const { classes } = this.props;

    return (
      <>
        <Title title="Sandbox" />
        <section className="section" id="styleguide">
          <Subtitle subtitle="Knopfänderungen" />
          <div className="level">
            <div className="level-left">vorher</div>
            <div className="level-right">
              <div className="level-item">
                <div className={classNames("field", "is-grouped", classes.c01)}>
                  <p className="control">
                    <a
                      className={classNames(
                        "button is-primary",
                        classes.primary
                      )}
                    >
                      Primary
                    </a>
                  </p>
                  <p className="control">
                    <a className={classNames("button is-link", classes.link)}>
                      Link
                    </a>
                  </p>
                  <p className="control">
                    <a className={classNames("button is-info", classes.info)}>
                      Info
                    </a>
                  </p>
                  <p className="control">
                    <a
                      className={classNames(
                        "button is-success",
                        classes.success
                      )}
                    >
                      Success
                    </a>
                  </p>
                  <p className="control">
                    <a
                      className={classNames(
                        "button is-warning",
                        classes.warning
                      )}
                    >
                      Warning
                    </a>
                  </p>
                  <p className="control">
                    <a
                      className={classNames("button is-danger", classes.danger)}
                    >
                      Danger
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="level">
            <div className="level-left">nachher</div>
            <div className="level-right">
              <div className="level-item">
                <div className="field is-grouped">
                  <p className="control">
                    <a className="button is-primary">Primary</a>
                  </p>
                  <p className="control">
                    <a className="button is-link">Link</a>
                  </p>
                  <p className="control">
                    <a className="button is-info">Info</a>
                  </p>
                  <p className="control">
                    <a className="button is-success">Success</a>
                  </p>
                  <p className="control">
                    <a className="button is-warning">Warning</a>
                  </p>
                  <p className="control">
                    <a className="button is-danger">Danger</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="button">
          <h1 className="title"> Button </h1>
          <hr />
          <div className="columns">
            <div className="column">
              <div className="buttons">
                <a className="button"> Button </a>
                <a className="button is-white"> White </a>
                <a className="button is-light"> Light </a>
                <a className="button is-dark"> Dark </a>
                <a className="button is-black"> Black </a>
                <a className="button is-link"> Link </a>
                <a className="button is-text"> Link </a>
              </div>
              <div className="buttons">
                <a className="button is-primary"> Primary </a>
                <a className="button is-info"> Info </a>
                <a className="button is-success"> Success </a>
                <a className="button is-warning"> Warning </a>
                <a className="button is-danger"> Danger </a>
              </div>
              <div className="buttons">
                <a className="button is-focused"> Focus </a>
                <a className="button is-primary is-focused"> Focus </a>
                <a className="button is-info is-focused"> Focus </a>
                <a className="button is-success is-focused"> Focus </a>
                <a className="button is-warning is-focused"> Focus </a>
                <a className="button is-danger is-focused"> Focus </a>
              </div>
              <div className="buttons">
                <a className="button is-hovered"> Hover </a>
                <a className="button is-primary is-hovered"> Hover </a>
                <a className="button is-info is-hovered"> Hover </a>
                <a className="button is-success is-hovered"> Hover </a>
                <a className="button is-warning is-hovered"> Hover </a>
                <a className="button is-danger is-hovered"> Hover </a>
              </div>
              <div className="buttons">
                <a className="button is-active"> Active </a>
                <a className="button is-primary is-active"> Active </a>
                <a className="button is-info is-active"> Active </a>
                <a className="button is-success is-active"> Active </a>
                <a className="button is-warning is-active"> Active </a>
                <a className="button is-danger is-active"> Active </a>
              </div>
            </div>
            <div className="column">
              <div className="buttons">
                <a className="button is-small"> Small </a>
                <a className="button"> Normal </a>
                <a className="button is-medium"> Medium </a>
                <a className="button is-large"> Large </a>
              </div>
              <div className="buttons">
                <a className="button is-outlined"> Outlined </a>
                <a className="button is-primary is-outlined"> Outlined </a>
                <a className="button is-info is-outlined"> Outlined </a>
                <a className="button is-success is-outlined"> Outlined </a>
                <a className="button is-danger is-outlined"> Outlined </a>
              </div>
            </div>
          </div>
          <div className="field is-grouped">
            <p className="control">
              <a className="button is-primary">
                {" "}
                <span className="icon">
                  <i className="fas fa-plus"></i>
                </span>
                &nbsp;&nbsp;Add Admin Group{" "}
              </a>
            </p>
            <p className="control">
              <a className="button is-warning">
                {" "}
                <span className="icon">
                  <i className="fa fa-times"></i>
                </span>
                &nbsp;&nbsp;Delete Admin Group
              </a>
            </p>
          </div>
          <div>
            <span className="tag is-info is-outlined">
              <span className=""></span> abc
            </span>
            <span className="tag is-success is-outlined">
              <span className="t-spacing-0-1-14"></span> Defgh
            </span>
            <span className="tag is-danger is-outlined">
              <span className="t-spacing-0-1-14"></span> Ijklmno
            </span>
            <br />
            <br />
          </div>
          <nav className="pagination is-centered" aria-label="pagination">
            <button
              type="button"
              disabled=""
              className="button is-default pagination-previous"
            >
              Zurück
            </button>
            <ul className="pagination-list">
              <li>
                <button
                  type="button"
                  disabled=""
                  className="button is-default pagination-link is-current"
                >
                  1
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="button is-default pagination-link"
                >
                  2
                </button>
              </li>
              <li>
                <span className="pagination-ellipsis">…</span>
              </li>
              <li>
                <button
                  type="button"
                  className="button is-default pagination-link"
                >
                  26
                </button>
              </li>
            </ul>
            <button type="button" className="button is-default pagination-next">
              Weiter
            </button>
          </nav>
        </section>
      </>
    );
  }
}

export default injectSheet(styles)(Sandbox);
