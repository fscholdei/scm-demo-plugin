// @flow
import React from "react";
import injectSheet from "react-jss";
import classNames from "classnames";
import { Subtitle } from "@scm-manager/ui-components";

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
        <section className="section" id="styleguide">
          <Subtitle subtitle="Neue Hintergrundfarben" />
          <table className="table is-bordered">
            <thead>
              <tr>
                <th> Class</th>
                <th> Color (100%)</th>
                <th> Color (75%)</th>
                <th> Color (50%)</th>
                <th> Color (25%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.has-background-dark</code>
                  <br />
                  <code>.has-background-dark-75</code>
                  <br />
                  <code>.has-background-dark-50</code>
                  <br />
                  <code>.has-background-dark-25</code>
                </td>
                <td>
                  <span className="button has-background-dark" /> <br />
                  <br />
                  #363636
                </td>
                <td>
                  <span className="button has-background-dark-75" /> <br />
                  <br />
                  #686868
                </td>
                <td>
                  <span className="button has-background-dark-50" /> <br />
                  <br />
                  #9a9a9a
                </td>
                <td>
                  <span className="button has-background-dark-25" /> <br />
                  <br />
                  #cdcdcd
                </td>
              </tr>
              <tr>
                <td>
                  <code>.has-background-info</code>
                  <br />
                  <code>.has-background-info-75</code>
                  <br />
                  <code>.has-background-info-50</code>
                  <br />
                  <code>.has-background-info-25</code>
                </td>
                <td>
                  <span className="button has-background-info" /> <br />
                  <br />
                  #33b2e8
                </td>
                <td>
                  <span className="button has-background-info-75" /> <br />
                  <br />
                  #66c5ee
                </td>
                <td>
                  <span className="button has-background-info-50" /> <br />
                  <br />
                  #99d8f3
                </td>
                <td>
                  <span className="button has-background-info-25" /> <br />
                  <br />
                  #ccecf9
                </td>
              </tr>
              <tr>
                <td>
                  <code>.has-background-link</code>
                  <br />
                  <code>.has-background-link-75</code>
                  <br />
                  <code>.has-background-link-50</code>
                  <br />
                  <code>.has-background-link-25</code>
                </td>
                <td>
                  <span className="button has-background-link" /> <br />
                  <br />
                  #33b2e8
                </td>
                <td>
                  <span className="button has-background-link-75" /> <br />
                  <br />
                  #66c5ee
                </td>
                <td>
                  <span className="button has-background-link-50" /> <br />
                  <br />
                  #99d8f3
                </td>
                <td>
                  <span className="button has-background-link-25" /> <br />
                  <br />
                  #ccecf9
                </td>
              </tr>
              <tr>
                <td>
                  <code>.has-background-primary</code>
                  <br />
                  <code>.has-background-primary-75</code>
                  <br />
                  <code>.has-background-primary-50</code>
                  <br />
                  <code>.has-background-primary-25</code>
                </td>
                <td>
                  <span className="button has-background-primary" /> <br />
                  <br />
                  #00d1df
                </td>
                <td>
                  <span className="button has-background-primary-75" /> <br />
                  <br />
                  #40dde7
                </td>
                <td>
                  <span className="button has-background-primary-50" /> <br />
                  <br />
                  #7fe8ef
                </td>
                <td>
                  <span className="button has-background-primary-25" /> <br />
                  <br />
                  #bff3f7
                </td>
              </tr>
              <tr>
                <td>
                  <code>.has-background-success</code>
                  <br />
                  <code>.has-background-success-75</code>
                  <br />
                  <code>.has-background-success-50</code>
                  <br />
                  <code>.has-background-success-25</code>
                </td>
                <td>
                  <span className="button has-background-success" /> <br />
                  <br />
                  #00c79b
                </td>
                <td>
                  <span className="button has-background-success-75" /> <br />
                  <br />
                  #40d5b4
                </td>
                <td>
                  <span className="button has-background-success-50" /> <br />
                  <br />
                  #7fe3cd
                </td>
                <td>
                  <span className="button has-background-success-25" /> <br />
                  <br />
                  #bff1e6
                </td>
              </tr>
              <tr>
                <td>
                  <code>.has-background-warning</code>
                  <br />
                  <code>.has-background-warning-75</code>
                  <br />
                  <code>.has-background-warning-50</code>
                  <br />
                  <code>.has-background-warning-25</code>
                </td>
                <td>
                  <span className="button has-background-warning" /> <br />
                  <br />
                  #ffdd57
                </td>
                <td>
                  <span className="button has-background-warning-75" /> <br />
                  <br />
                  #ffe681
                </td>
                <td>
                  <span className="button has-background-warning-50" /> <br />
                  <br />
                  #ffeeab
                </td>
                <td>
                  <span className="button has-background-warning-25" /> <br />
                  <br />
                  #fff6d5
                </td>
              </tr>
              <tr>
                <td>
                  <code>.has-background-danger</code>
                  <br />
                  <code>.has-background-danger-75</code>
                  <br />
                  <code>.has-background-danger-50</code>
                  <br />
                  <code>.has-background-danger-25</code>
                </td>
                <td>
                  <span className="button has-background-danger" /> <br />
                  <br />
                  #ff3860
                </td>
                <td>
                  <span className="button has-background-danger-75" /> <br />
                  <br />
                  #ff6a88
                </td>
                <td>
                  <span className="button has-background-danger-50" /> <br />
                  <br />
                  #ff9baf
                </td>
                <td>
                  <span className="button has-background-danger-25" /> <br />
                  <br />
                  #ffcdd7
                </td>
              </tr>
            </tbody>
          </table>
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
