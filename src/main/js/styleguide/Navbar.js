// @flow
import React from "react";

export default class Navbar extends React.Component<> {
  render() {
    return (
      <>
        <section className="hero is-dark is-small">
          <div className="hero-body">
            <div className="columns is-vcentered">
              <div className="column">
                <img src="images/logo.png" alt="SCM-Manager" />
              </div>
            </div>
          </div>
          <div className="hero-foot">
            <nav className="tabs is-boxed">
              <ul>
                <li className="is-active">
                  <a href="#">Repositories</a>
                </li>
                <li className="">
                  <a href="#">Users</a>
                </li>
                <li className="">
                  <a href="#">Groups</a>
                </li>
                <li className="">
                  <a href="#">Configuration</a>
                </li>
                <div>
                  <li className="">
                    <a href="#">Scripts</a>
                  </li>
                </div>
                <li className="">
                  <a href="#">Logout</a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
        <section className="section">
          <h2 className="title is-3">Sidebar Navigation</h2>
          <hr />
          <div className="columns">
            <div className="column is-three-quarters ">
              <div className="notification">
                <div className="content">
                  <ul>
                    <li>
                      Plugins are always listed after "Information", "Commits"
                      and "Sources".
                    </li>
                    <li>"Settings" is always located at the bottom.</li>
                    <li>
                      The order of the navigation elements should be consistent
                      for all subpages.
                    </li>
                    <li className="has-text-danger">
                      <i>Icons for plugins and submenus are still missing.</i>
                    </li>
                  </ul>
                  <br />
                </div>
              </div>
            </div>
            <div className="column is-one-quarter is-clipped">
              <aside className="menu">
                <div>
                  <p className="menu-label">Navigation</p>
                  <ul className="menu-list">
                    <li>
                      <a className="is-active" href="">
                        <i className="fas fa-info-circle" /> Information
                      </a>
                    </li>
                    <li>
                      <a className="" href="#">
                        <i className="fas fa-code-branch" /> Commits
                      </a>
                    </li>
                    <li>
                      <a
                        className=""
                        href="/scm/repo/scm-manager/scm-jenkins-plugin/sources"
                      >
                        <i className="fas fa-code" /> Sources
                      </a>
                    </li>
                    <li>
                      <a
                        className=""
                        href="/scm/repo/scm-manager/scm-jenkins-plugin/jira"
                      >
                        Jira
                      </a>
                    </li>
                    <li>
                      <a className="" href="#">
                        Web Hooks
                      </a>
                    </li>
                    <li>
                      <a className="" href="#">
                        Jenkins
                      </a>
                    </li>
                    <li>
                      <a className="" href="#">
                        Redmine
                      </a>
                    </li>
                    <li>
                      <a className="" href="#">
                        <i className="fas fa-chart-pie" /> Statistics
                      </a>
                    </li>
                    <li>
                      <a className="" href="#">
                        <i className="fas fa-cog" /> Settings
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </>
    );
  }
}
