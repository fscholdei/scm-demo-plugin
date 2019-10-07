// @flow
import React from "react";

export default class Button extends React.Component<> {
  render() {
    return (
      <section className="section">
        <div className="container">
          <h2 className="title is-3">Buttons</h2>
          <hr />
          <br />
          <br />
          <h3 className="subtitle is-4">Standard Buttons</h3>
          <div className="notification">
            Standard Buttons are using the full base colors.
          </div>
          <div className="level">
            <div className="level-left" />
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
          <br />
          <br />
          <br />
          <h3 className="subtitle is-4">Disabled buttons</h3>
          <div className="notification">
            Disabled buttons are using 25% of the base colors.
          </div>
          <div className="level">
            <div className="level-left" />
            <div className="level-right">
              <div className="level-item">
                <div className="field is-grouped">
                  <p className="control">
                    <a className="button is-primary" disabled="">
                      Primary
                    </a>
                  </p>
                  <p className="control">
                    <a className="button is-link" disabled="">
                      Link
                    </a>
                  </p>
                  <p className="control">
                    <a className="button is-info" disabled="">
                      Info
                    </a>
                  </p>
                  <p className="control">
                    <a className="button is-success" disabled="">
                      Success
                    </a>
                  </p>
                  <p className="control">
                    <a className="button is-warning" disabled="">
                      Warning
                    </a>
                  </p>
                  <p className="control">
                    <a className="button is-danger" disabled="">
                      Danger
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <h3 className="subtitle is-4">Hovered buttons</h3>
          <div className="notification">
            The hover color of each button is 10% darker than the base color.
          </div>
          <div className="level">
            <div className="level-left" />
            <div className="level-right">
              <div className="level-item">
                <div className="field is-grouped">
                  <p className="control">
                    <a className="button is-primary is-hovered">Primary</a>
                  </p>
                  <p className="control">
                    <a className="button is-link is-hovered">Link</a>
                  </p>
                  <p className="control">
                    <a className="button is-info is-hovered">Info</a>
                  </p>
                  <p className="control">
                    <a className="button is-success is-hovered">Success</a>
                  </p>
                  <p className="control">
                    <a className="button is-warning is-hovered">Warning</a>
                  </p>
                  <p className="control">
                    <a className="button is-danger is-hovered">Danger</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <h3 className="subtitle is-4">Active buttons</h3>
          <div className="notification">
            The active color of each button is 20% darker than the base color.
          </div>
          <div className="level">
            <div className="level-left" />
            <div className="level-right">
              <div className="level-item">
                <div className="has-text-right">
                  <div className="field is-grouped">
                    <p className="control">
                      <a className="button is-primary is-active">Primary</a>
                    </p>
                    <p className="control">
                      <a className="button is-link is-active">Link</a>
                    </p>
                    <p className="control">
                      <a className="button is-info is-active">Info</a>
                    </p>
                    <p className="control">
                      <a className="button is-success is-active">Success</a>
                    </p>
                    <p className="control">
                      <a className="button is-warning is-active">Warning</a>
                    </p>
                    <p className="control">
                      <a className="button is-danger is-active">Danger</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <h3 className="subtitle is-4">Button groups and addons</h3>
          <div className="notification content">
            <ul>
              <li>
                If buttons are part of the same functional group they can be
                displayed as "addon buttons".
              </li>
              <li>
                Avoid buttons sticking together without being addon buttons.
              </li>
              <li>
                If you don't want buttons to be addons, please place enough
                space between them.
              </li>
              <li>
                In cases where just the first button is visible and others might
                be added later in the process, or buttons aren't part of the
                same functional group, "grouped buttons" can be used.
              </li>
              <li>
                If the contents of buttons have a direct connection (like
                "Create" and "Delete") they should be placed next to each other.
              </li>
            </ul>
          </div>
          <h5>Button addon</h5>
          <br />
          <div className="field has-addons">
            <p className="control">
              <a className="button is-primary">
                <span>Run</span>{" "}
              </a>
            </p>
            <p className="control">
              <a className="button">
                {" "}
                <span>Store</span>{" "}
              </a>
            </p>
          </div>
          <br />
          <h5>Button group</h5>
          <br />
          <div className="field is-grouped">
            <p className="control">
              <a className="button is-primary">
                {" "}
                <span className="icon">
                  <i className="fas fa-plus" />
                </span>
                &nbsp;&nbsp;Add Admin Group
              </a>
            </p>
            <p className="control">
              <a className="button is-warning">
                {" "}
                <span className="icon">
                  <i className="fa fa-times" />
                </span>
                &nbsp;&nbsp;Delete Admin Group
              </a>
            </p>
          </div>
          <br />
          <br />
          <h3 className="subtitle is-4">Pagination</h3>
          <h5>Disabled pagination</h5>
          <br />
          <div className="notification">
            Disabled navigation buttons are either grey or light blue.
          </div>
          <nav className="pagination is-centered" aria-label="pagination">
            <button
              type="button"
              disabled="disabled"
              className="button is-default pagination-previous"
            >
              Previous
            </button>
            <button
              type="button"
              disabled="disabled"
              className="button is-default pagination-next"
            >
              Next
            </button>
            <ul className="pagination-list">
              <li>
                <button
                  type="button"
                  disabled="disabled"
                  className="button is-default pagination-link is-current"
                >
                  1
                </button>
              </li>
            </ul>
          </nav>
          <br />
          <br />
          <h5>Active pagination</h5>
          <br />
          <div className="notification">
            Active navigation buttons are either white or blue (100% tone of
            info/link color). <br />
            The buttons containing the page numbers should have the same width,
            even when reaching triple digits. For this a width of 80px is
            necessary.
          </div>
          <nav className="pagination is-centered" aria-label="pagination">
            <button
              type="button"
              className="button is-default pagination-previous"
            >
              Previous
            </button>
            <button type="button" className="button is-default pagination-next">
              Next
            </button>
            <ul className="pagination-list">
              <li>
                <button
                  type="button"
                  className="button is-default pagination-link"
                >
                  1
                </button>
              </li>
              <li>
                <button
                  type="button"
                  disabled=""
                  className="button is-default pagination-link is-current"
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
                  457
                </button>
              </li>
            </ul>
          </nav>
          <br />
          <br />
          <h3 className="subtitle is-4">Create</h3>
          <div className="notification">
            {" "}
            "Create" buttons at the top of pages should always be positioned on
            the right side. <br />
            Create buttons at the end of a page should be full-width and
            complemented with a border.
          </div>
          <div className="has-text-right">
            <button type="submit" className="button is-primary">
              Create repository
            </button>
          </div>
          <div className="has-text-centered t-spacing-0-1-18">
            <button type="submit" className="button is-primary">
              Create repository
            </button>
          </div>
          <br />
          <br />
          <h3 className="subtitle is-4">Submit</h3>
          <div className="notification">
            When a primary action like a "submit" button for a form is used, it
            should be placed on the bottom right of the page.
          </div>
          <div className="level">
            <div className="level-left" />
            <div className="level-right">
              <div className="level-item">
                <div className="field is-grouped">
                  <p className="control">
                    <button className="button">Cancel</button>
                  </p>
                  <p className="control">
                    <button type="submit" className="button is-primary">
                      Submit
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <h3 className="subtitle is-4">Add and delete</h3>
          <div className="notification">
            Icons are added before the text to mark these buttons as special
            elements.
          </div>
          <div className="level">
            <div className="level-left" />
            <div className="level-right">
              <div className="level-item">
                <div className="field is-grouped">
                  <p className="control">
                    <button type="button" className="button is-primary">
                      <span className="icon">
                        <i className="fa fa-plus" />
                      </span>
                      &nbsp;&nbsp;Add
                    </button>
                  </p>
                  <p className="control">
                    <button type="button" className="button is-warning">
                      <span className="icon">
                        <i className="fa fa-times" />
                      </span>
                      &nbsp;&nbsp;Delete
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <h3 className="subtitle is-4 ">Button texts</h3>
          <div className="notification ">
            Button letterings should always be precise. Example: Use "create
            user" instead of "create" for button lettering.
          </div>
          <div className="level">
            <div className="level-left" />
            <div className="level-right">
              <div className="level-item">
                <div className="field is-grouped">
                  <p className="control">
                    <button type="submit" className="button is-primary">
                      Create repository
                    </button>
                  </p>
                  <p className="control">
                    <button type="submit" className="button is-primary">
                      Create user
                    </button>
                  </p>
                  <p className="control">
                    <button type="submit" className="button is-primary">
                      Create group
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
