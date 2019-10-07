// @flow
import React from "react";

export default class Color extends React.Component<> {
  render() {
    return (
      <section className="section">
        <h1 className="title is-1">Styleguide</h1>
        <div className="notification is-info">
          <strong>Important:</strong> <br />
          This overview is focused on visual, not structural or functional
          aspects. It may contain class names not yet integrated in SCM-Manager
          and can only display the present state. There may be changes to some
          elements in the near future. <br />
        </div>
        <br />
        <br />
        <h2 className="title is-3">Colors</h2>
        <hr />
        <div className="notification content">
          Overview for all main colors with examples for lighter nuances. <br />
          <ul>
            <li>
              Colors with 75%-25% opacity will only be used for elements like
              graphs (where there is a need for extra color shades) and relevant
              interaction states (like disabled buttons).
            </li>
            <li>
              As soon as there is a use case where the separation of the colors
              for "info" and "link" seems necessary, it will be possible to
              change the current color assignment.
            </li>
          </ul>
        </div>
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
        <br />
        <br />
        <table className="table is-bordered">
          <thead>
            <tr>
              <th> Class</th>
              <th> Text</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>.has-text-dark</code>
                <br />
              </td>
              <td>
                <span className="has-text-dark">Beispieltext</span>
              </td>
            </tr>
            <tr>
              <td>
                <code>.has-text-info</code>
                <br />
              </td>
              <td>
                <span className="has-text-info">Beispieltext</span>
              </td>
            </tr>
            <tr>
              <td>
                <code>.has-text-link</code>
                <br />
              </td>
              <td>
                <span className="has-text-link">Beispieltext</span>
              </td>
            </tr>
            <tr>
              <td>
                <code>.has-text-primary</code>
                <br />
              </td>
              <td>
                <span className="has-text-primary">Beispieltext</span>
              </td>
            </tr>
            <tr>
              <td>
                <code>.has-text-success</code>
                <br />
              </td>
              <td>
                <span className="has-text-success">Beispieltext</span>
              </td>
            </tr>
            <tr>
              <td>
                <code>.has-text-warning</code>{" "}
                <span className="tag is-light">
                  {" "}
                  Attention: Has color #FFB600 because of readability issues
                  with the original color #ffdd57.
                </span>
              </td>
              <td>
                <span className="has-text-warning">Beispieltext</span>
              </td>
            </tr>
            <tr>
              <td>
                <code>.has-text-danger</code>
                <br />
              </td>
              <td>
                <span className="has-text-danger">Beispieltext</span>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        <h2 className="title is-3">Hero &amp; Main Navigation (Tab-based)</h2>
        <hr />
        <div className="notification">
          <i className="has-text-danger">
            May contain mobile hamburger menu in the future?
          </i>
        </div>
      </section>
    );
  }
}
