// @flow
import React from "react";

export default class Examples extends React.Component<> {
  render() {
    return (
      <section className="section">
        <div className="container">
          <h2 className="title is-3">Examples of use</h2>
          <hr />

          <h3 className="subtitle is-4">Display of users (e.g. changesets)</h3>
          <div className="notification">
            Use tags and different font-weights to visually structure
            information.
          </div>
          <div className="content">
            <br />
            <article className="media">
              <p className="image is-64x64 Translate(s)-spacing-0-1-8">
                <img
                  className="has-rounded-border"
                  src="https://gravatar.com/avatar/2f4a8735d6647f76e8a725b3d4987de5?size=64&amp;default=identicon"
                  alt="Sebastian Sdorra"
                />
              </p>
              <div className="media-content">
                <p>
                  <strong>Sebastian Sdorra</strong>{" "}
                  <a
                    className="is-hidden-mobile"
                    href="mailto:s.sdorra@gmail.com"
                  >
                    <span className="tag">s.sdorra@gmail.com</span>
                  </a>
                </p>
                <p className="has-text-grey">
                  <span>
                    Changeset e7468dd was committed <span>2 months ago</span>
                  </span>
                </p>
              </div>
            </article>
            <p>
              <span>
                <br />
              </span>
            </p>
          </div>
          <br />
          <h3 className="subtitle is-4">
            Complex screens (e.g. pull requests)
          </h3>
          <div className="notification content">
            Screens with a big bunch of information should be carefully
            structured to help the user with orientation.
            <ul>
              <li>
                Make sure areas with different functionalities are clearly
                separated (use horizontal lines, boxes and/or bigger gaps
                between them).
              </li>
              <li>
                Buttons with different actions should have different colors.
              </li>
              <li>
                The "reject pull request" and "Merge pull request" buttons are
                good examples for a meaningful usage of addon buttons.
              </li>
              <li>
                Information belonging together should be placed next to each
                other (for example the user who did the last edit and the date
                of the last edit).
              </li>
              <li>
                Make sure important states like "open" are properly marked. For
                example, with tags.
              </li>
            </ul>
          </div>
          <div className="columns">
            <div className="column is-three-quarters is-clipped">
              <div className="colums">
                <div className="column is-clipped">
                  <div className="media">
                    <div className="media-content">
                      <h1 className="title">#1 Merge-Conflicts</h1>
                    </div>
                    <a className="media-right">
                      <span className="icon is-small" />
                    </a>
                    <a className="button is-small" href="#">
                      <i className="fas fa-edit" />
                      &nbsp;Edit pull request
                    </a>
                  </div>
                  <div className="Translate(o)-borderTop-0-1-10 media">
                    <div className="media-content">
                      <div>
                        <span
                          className="tag is-light is-medium"
                          title="feature/e"
                        >
                          <span className="Translate(o)-tagShorter-0-1-9">
                            feature/e
                          </span>
                        </span>{" "}
                        <i className="fas fa-long-arrow-alt-right" />{" "}
                        <span className="tag is-light is-medium" title="master">
                          <span className="Translate(o)-tagShorter-0-1-9">
                            master
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="media-right tag is-success is-medium">
                      OPEN
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-content">
                      <span className="is-word-break">
                        Hier gibt es Merge Konflikte
                        <br />
                      </span>
                    </div>
                  </div>
                  <div className="media Translate(o)-bottomSpace-0-1-8 has-text-grey">
                    <div className="media-content">
                      msuewer <span>a month ago</span>
                    </div>
                  </div>
                  <div className="Translate(o)-borderTop-0-1-10 Translate(o)-bottomSpace-0-1-10">
                    <div className="field has-addons flex-float-right-0-1-1 Translate(o)-bottomSpace-0-1-8">
                      <p className="control">
                        <button type="button" className="button is-warning">
                          Reject pull request
                        </button>
                      </p>
                      <p className="control">
                        <button type="button" className="button">
                          Merge pull request
                        </button>
                      </p>
                    </div>
                  </div>
                  <div className="box">
                    <div className="tabs">
                      <ul>
                        <li className="is-active">
                          <a href="#">Comments</a>
                        </li>
                        <li className="">
                          <a href="#">Commits</a>
                        </li>
                        <li className="">
                          <a href="#">Diff</a>
                        </li>
                      </ul>
                    </div>
                    <article className="media">
                      <div className="media-content">
                        <div className="content">
                          <p>
                            <strong>msuewer </strong>
                            <span>a month ago</span>
                            <br />
                            <span>
                              Testkommentar
                              <br />
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="media-right">
                        <div className="level-right">
                          <a className="level-item">
                            <span className="icon is-small">
                              <i className="fas fa-trash" />
                            </span>
                          </a>
                          <a className="level-item">
                            <span className="icon is-small">
                              <i className="fas fa-edit" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </article>
                    <article className="media">
                      <div className="media-content">
                        <div className="content">
                          <p>
                            <strong>msuewer </strong>
                            <span>a month ago</span>
                            <br />
                            <span>
                              das c ist falsch!
                              <br />
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="media-right">
                        <div className="level-right">
                          <a className="level-item">
                            <span className="icon is-small">
                              <i className="fas fa-trash" />
                            </span>
                          </a>
                          <a className="level-item">
                            <span className="icon is-small">
                              <i className="fas fa-edit" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </article>
                    <article className="media">
                      <div className="media-content">
                        <div className="field">
                          <p className="control" />
                          <div className="field">
                            <div className="control">
                              <textarea
                                className="textarea"
                                placeholder="Add comment"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="field">
                          <p className="control has-text-right">
                            <button type="submit" className="button is-primary">
                              <span className="icon">
                                <i className="fa fa-plus" />
                              </span>
                              &nbsp;&nbsp;Add comment
                            </button>
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <h3 className="subtitle is-4">Group Member List</h3>
          <div className="notification has-text-danger">
            <i>
              Is there a new version of it which is still in review? Add later?
            </i>
          </div>
          <table className="table content">
            <tbody>
              <tr>
                <td>
                  Members
                  <ul>
                    <li>
                      <a href="#">sdorra</a>
                    </li>
                    <li>
                      <a href="#">pczora</a>
                    </li>
                    <li>
                      <a href="#">pfeuffer</a>
                    </li>
                    <li>
                      <a href="#">ischindler</a>
                    </li>
                    <li>
                      <a href="#">mkarray</a>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}
