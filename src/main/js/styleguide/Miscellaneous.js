// @flow
import React from "react";
import injectSheet from "react-jss";
import classNames from "classnames";

type Props = {
  classes: any
};

const styles = {
  border: {
    boxShadow: "none",
    border: "1px solid #dbdbdb"
  }
};

class Miscellaneous extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <section className="section">
        <div className="container">
          <h2 className="title is-3">Miscellaneous elements</h2>
          <hr />
          <h3 className="subtitle is-4">Modals</h3>
          <div className="notification">
            Even if the content of the modals differs, they all should use the
            same basic classes <code>.modal-content</code> and{" "}
            <code>.modal-card</code> to ensure a constant layout. Buttons inside
            the modals should use the standard button formats.
          </div>
          <div className="modal-content">
            <div className="box">
              <article className="media">
                <div className="media-content">
                  <div className="content">
                    <h3>Merge pull request</h3>
                    <p>Do you really want to merge?</p>
                    <div className="is-pulled-right">
                      <div className="field is-grouped">
                        <p className="control">
                          <button className="button is-warning">Yes</button>
                        </p>
                        <p className="control">
                          <button className="button">No</button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <br />
          <br />
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title has-text-danger">
                Cannot be merged automatically
              </p>
              <button className="delete" aria-label="close" />
            </header>
            <section className="modal-card-body">
              <div className="content">
                <div>
                  <h4>How to merge source branch into target branch</h4>
                  1. Make sure your workspace is clean and checkout target
                  branch
                  <pre>
                    <code>git checkout master</code>
                  </pre>
                  2. Update workspace
                  <pre>
                    <code>git pull</code>
                  </pre>
                  3. Merge source branch
                  <pre>
                    <code>git merge feature/e</code>
                  </pre>
                  4. Resolve merge conflicts and add corrected files to index
                  <pre>
                    <code>git add &lt;conflict file&gt;</code>
                  </pre>
                  5. Commit
                  <pre>
                    <code>git commit -m "Merge feature/e into master"</code>
                  </pre>
                  6. Push your merge
                  <pre>
                    <code>git push</code>
                  </pre>
                </div>
              </div>
            </section>
          </div>
          <br />
          <br />
          <h3 className="subtitle is-4">Standard tables</h3>
          <div className="notification">
            Titles inside the tables should be in bold letters.
          </div>
          <table className="table content">
            <tbody>
              <tr>
                <td className="has-text-weight-semibold">Name</td>
                <td>G1</td>
              </tr>
              <tr>
                <td className="has-text-weight-semibold">Description</td>
                <td>Awesome</td>
              </tr>
              <tr>
                <td className="has-text-weight-semibold">Type</td>
                <td>xml</td>
              </tr>
              <tr>
                <td className="has-text-weight-semibold">Creation Date</td>
                <td>
                  <span>5 days ago</span>
                </td>
              </tr>
              <tr>
                <td className="has-text-weight-semibold">Last Modified</td>
                <td>
                  <span>15 minutes ago</span>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <h3 className="subtitle is-4">Group and user tables</h3>
          <div className="notification">
            {" "}
            Special tables can be used for group- or user-lists. Colors at the
            left side could display roles, for example green = normal user,
            yellow = admin.
          </div>
          <div className="container">
            <table className="card-table table is-hoverable is-fullwidth">
              <thead>
                <tr>
                  <th className="is-hidden-mobile">Username</th>
                  <th>Display Name</th>
                  <th>E-Mail</th>
                  <th className="is-hidden-mobile">Admin</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="is-hidden-mobile">
                    <a href="#">anonymous</a>
                  </td>
                  <td>
                    <a href="#">SCM Anonymous</a>
                  </td>
                  <td>
                    <a href="mailto: scm-anonymous@scm-manager.org">
                      scm-anonymous@scm-manager.org
                    </a>
                  </td>
                  <td className="is-hidden-mobile">
                    <input type="checkbox" id="admin1" readOnly="" />
                  </td>
                </tr>
                <tr>
                  <td className="is-hidden-mobile">
                    <a href="#">dhuchthausen</a>
                  </td>
                  <td>
                    <a href="#">Daniel Huchthausen</a>
                  </td>
                  <td>
                    <a href="mailto: daniel.huchthausen@cloudogu.com">
                      daniel.huchthausen@cloudogu.com
                    </a>
                  </td>
                  <td className="is-hidden-mobile">
                    <input type="checkbox" id="admin2" readOnly="" />
                  </td>
                </tr>
                <tr className="is-admin">
                  <td className="is-hidden-mobile">
                    <a href="#">fscholdei</a>
                  </td>
                  <td>
                    <a href="#">Florian Scholdei</a>
                  </td>
                  <td>
                    <a href="mailto: florian.scholdei@cloudogu.com">
                      florian.scholdei@cloudogu.com
                    </a>
                  </td>
                  <td className="is-hidden-mobile">
                    <input type="checkbox" id="admin3" readOnly="" checked="" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
          <br />
          <h3 className="subtitle is-4">Forms</h3>
          <div className="notification ">
            If possible, forms should be divided into two columns to get a
            better grasp of the content. It is recommended to divide unrelated
            content with horizontal lines.
          </div>
          <div>
            <div className="columns">
              <div className="column is-half">
                <div className="field">
                  <label className="label">
                    Realm Description
                    <div
                      className="tooltip is-tooltip-right t-tooltip-0-1-10"
                      data-tooltip="Enter authentication realm description"
                    >
                      <i className="fa fa-question-circle has-text-info t-textinfo-0-1-11" />
                    </div>
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder=""
                      value="SONIA :: SCM Manager"
                    />
                  </div>
                </div>
              </div>
              <div className="column is-half">
                <div className="field">
                  <label className="label">
                    Date Format
                    <div
                      className="tooltip is-tooltip-right is-tooltip-multiline t-tooltip-0-1-10"
                      data-tooltip="Moments date format. Please have a look at the momentjs documentation."
                    >
                      <i className="fa fa-question-circle has-text-info t-textinfo-0-1-11" />
                    </div>
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder=""
                      value="YYYY-MM-DD HH:mm:ss"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column is-half">
                <div className="field">
                  <label className="label">
                    Plugin URL
                    <div
                      className="tooltip is-tooltip-right is-tooltip-multiline t-tooltip-0-1-10"
                      data-tooltip="The url of the plugin repository. Explanation of the placeholders: version = SCM-Manager Version; os = Operation System; arch = Architecture"
                    >
                      <i className="fa fa-question-circle has-text-info t-textinfo-0-1-11" />
                    </div>
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder=""
                      value="/api/{version}/plugins?os={os}&amp;arch={arch}&amp;snapshot=false"
                    />
                  </div>
                </div>
              </div>
              <div className="column is-half">
                <div className="field">
                  <label className="label">
                    Default Namespace Strategy
                    <div
                      className="tooltip is-tooltip-right t-tooltip-0-1-10"
                      data-tooltip="The default namespace strategy"
                    >
                      <i className="fa fa-question-circle has-text-info t-textinfo-0-1-11" />
                    </div>
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder=""
                      value="sonia.scm.repository.DefaultNamespaceStrategy"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column is-half">
                <div className="field is-grouped">
                  <div className="control">
                    <label className="checkbox">
                      <input type="checkbox" checked="" />
                      Enabled XSRF Protection
                      <div
                        className="tooltip is-tooltip-right is-tooltip-multiline t-tooltip-0-1-10"
                        data-tooltip="Enable Xsrf Cookie Protection. Note: This feature is still experimental."
                      >
                        <i className="fa fa-question-circle has-text-info t-textinfo-0-1-11" />
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="column is-half">
                <div className="field is-grouped">
                  <div className="control">
                    <label className="checkbox">
                      <input type="checkbox" />
                      Enable Repository Archive
                      <div
                        className="tooltip is-tooltip-right is-tooltip-multiline t-tooltip-0-1-10"
                        data-tooltip="Enable repository archives. A complete page reload is required after a change of this value."
                      >
                        <i className="fa fa-question-circle has-text-info t-textinfo-0-1-11" />
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column is-half">
                <div className="field is-grouped">
                  <div className="control">
                    <label className="checkbox">
                      <input type="checkbox" />
                      Disable Grouping Grid
                      <div
                        className="tooltip is-tooltip-right is-tooltip-multiline t-tooltip-0-1-10"
                        data-tooltip="Disable repository Groups. A complete page reload is required after a change of this value."
                      >
                        <i className="fa fa-question-circle has-text-info t-textinfo-0-1-11" />
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="column is-half">
                <div className="field is-grouped">
                  <div className="control">
                    <label className="checkbox">
                      <input type="checkbox" />
                      Anonymous Access Enabled
                      <div
                        className="tooltip is-tooltip-right t-tooltip-0-1-10"
                        data-tooltip="Anonymous users have read access on public repositories."
                      >
                        <i className="fa fa-question-circle has-text-info t-textinfo-0-1-11" />
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column is-half">
                <div className="field is-grouped">
                  <div className="control">
                    <label className="checkbox">
                      <input type="checkbox" />
                      Skip Failed Authenticators
                      <div
                        className="tooltip is-tooltip-right is-tooltip-multiline t-tooltip-0-1-10"
                        data-tooltip="Do not stop the authentication chain, if an authenticator finds the user but fails to authenticate the user."
                      >
                        <i className="fa fa-question-circle has-text-info t-textinfo-0-1-11" />
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
          <br />
          <br />
          <h3 className="subtitle is-4">Radio buttons</h3>
          <div className="notification">
            Radio buttons should have enough space between them and the labels.
          </div>
          <div>
            <h2 className="subtitle">Add new Permission</h2>
            <form>
              <div className="control">
                <label className="radio">
                  <input
                    type="radio"
                    name="permission_scope"
                    value="USER_PERMISSION"
                    checked=""
                  />
                  User Permission
                </label>
                <label className="radio">
                  <input
                    type="radio"
                    name="permission_scope"
                    value="GROUP_PERMISSION"
                  />
                  Group Permission
                </label>
              </div>
            </form>
          </div>
          <br />
          <br />
          <br />
          <h3 className="subtitle is-4">Select</h3>
          <div className="notification">
            {" "}
            Select elements should always contain placeholder texts.
          </div>
          <div className="field is-horizontal u-wrapper-0-1-21">
            <div className="field-body">
              <div className="field is-narrow">
                <div className="control">
                  <div className="is-fullwidth select">
                    <select>
                      <option>Select option</option>
                      <option value="develop">develop</option>
                      <option value="master">master</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <h3 className="subtitle is-4">Headlines</h3>
          <div className="notification">
            Subheadlines should only be used if there is reasonable content for
            them.
          </div>
          <div className="container">
            <div className={classNames("box", classes.border)}>
              <h1 className="title">Users</h1>
              <h2 className="subtitle">
                Create, read, update and delete users
              </h2>
            </div>
          </div>
          <br />
          <br />
          <h3 className="subtitle is-4">Tags</h3>
          <div className="notification">
            Tags can use background in all full base colors.
          </div>
          <span className="tag is-info">
            <span className="fa fa-tag t-spacing-0-1-14" /> tip
          </span>{" "}
          <span className="tag is-success">OPEN</span>{" "}
          <span className="tag is-danger">Warning</span>
          <br />
          <br />
          <br />
          <h3 className="subtitle is-4">Statistics</h3>
          <div className="notification has-text-danger">
            <i>Already done but still in review? Add later?</i>
          </div>
          <br />
          <br />
          <h3 className="subtitle is-4">Notifications</h3>
          <div className="notification">
            Notification are using the full base colors.
          </div>
          <div className="columns">
            <div className="column is-one-third">
              <div className="notification is-primary">
                <button className="delete" />
                <strong>Primary/Success</strong>
                <br />
                Primar lorem ipsum dolor sit amet, consectetur adipiscing elit
                lorem ipsum dolor. Pellentesque risus mi, tempus quis placerat
                ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
                fringilla. Nullam gravida purus diam, et dictum{" "}
                <a>felis venenatis</a> efficitur.
              </div>
            </div>
            <div className="column is-one-third">
              <div className="notification is-info">
                <button className="delete" />
                <strong>Info/Link</strong>
                <br />
                Primar lorem ipsum dolor sit amet, consectetur adipiscing elit
                lorem ipsum dolor. Pellentesque risus mi, tempus quis placerat
                ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
                fringilla. Nullam gravida purus diam, et dictum{" "}
                <a>felis venenatis</a> efficitur.
              </div>
            </div>
            <div className="column is-one-third">
              <div className="notification is-success">
                <button className="delete" />
                <strong>Success</strong>
                <br />
                Primar lorem ipsum dolor sit amet, consectetur adipiscing elit
                lorem ipsum dolor. Pellentesque risus mi, tempus quis placerat
                ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
                fringilla. Nullam gravida purus diam, et dictum{" "}
                <a>felis venenatis</a> efficitur.
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-one-third">
              <div className="notification is-warning">
                <button className="delete" />
                <strong>Warning</strong>
                <br />
                Primar lorem ipsum dolor sit amet, consectetur adipiscing elit
                lorem ipsum dolor. Pellentesque risus mi, tempus quis placerat
                ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
                fringilla. Nullam gravida purus diam, et dictum{" "}
                <a>felis venenatis</a> efficitur.
              </div>
            </div>
            <div className="column is-one-third">
              <div className="notification is-danger">
                <button className="delete" />
                <strong>Danger</strong>
                <br />
                Primar lorem ipsum dolor sit amet, consectetur adipiscing elit
                lorem ipsum dolor. Pellentesque risus mi, tempus quis placerat
                ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
                fringilla. Nullam gravida purus diam, et dictum{" "}
                <a>felis venenatis</a> efficitur.
              </div>
            </div>
            <div className="column is-three-thirds" />
          </div>
        </div>
      </section>
    );
  }
}
export default injectSheet(styles)(Miscellaneous);
