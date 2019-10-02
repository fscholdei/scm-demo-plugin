// @flow
import React from "react";

export default class Tabs extends React.Component<> {
  render() {
    return (
      <section className="section" id="tabs">
        <h1 className="title">Tabs</h1>
        <hr />
        <div className="tabs">
          <ul>
            <li className="is-active">
              <a>Pictures</a>
            </li>
            <li>
              <a>Music</a>
            </li>
            <li>
              <a>Videos</a>
            </li>
            <li>
              <a>Documents</a>
            </li>
          </ul>
        </div>
        <br />
        <div className="tabs is-centered">
          <ul>
            <li className="is-active">
              <a>
                <span className="icon is-small">
                  <i className="fas fa-image" />
                </span>
                <span>Pictures</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="fas fa-music" />
                </span>
                <span>Music</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="fas fa-film" />
                </span>
                <span>Videos</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="fas fa-file-text-o" />
                </span>
                <span>Documents</span>
              </a>
            </li>
          </ul>
        </div>
        <br />
        <div className="tabs is-small">
          <ul>
            <li className="is-active">
              <a>Pictures</a>
            </li>
            <li>
              <a>Music</a>
            </li>
            <li>
              <a>Videos</a>
            </li>
            <li>
              <a>Documents</a>
            </li>
          </ul>
        </div>
        <br />
        <div className="tabs is-medium">
          <ul>
            <li className="is-active">
              <a>Pictures</a>
            </li>
            <li>
              <a>Music</a>
            </li>
            <li>
              <a>Videos</a>
            </li>
            <li>
              <a>Documents</a>
            </li>
          </ul>
        </div>
        <br />
        <div className="tabs is-large">
          <ul>
            <li className="is-active">
              <a>Pictures</a>
            </li>
            <li>
              <a>Music</a>
            </li>
            <li>
              <a>Videos</a>
            </li>
            <li>
              <a>Documents</a>
            </li>
          </ul>
        </div>
        <br />
        <div className="tabs is-boxed">
          <ul>
            <li className="is-active">
              <a>
                <span className="icon is-small">
                  <i className="fas fa-image" />
                </span>
                <span>Pictures</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="fas fa-music" />
                </span>
                <span>Music</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="fas fa-film" />
                </span>
                <span>Videos</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="fas fa-file-text-o" />
                </span>
                <span>Documents</span>
              </a>
            </li>
          </ul>
        </div>
        <br />
        <div className="tabs is-toggle">
          <ul>
            <li className="is-active">
              <a>
                <span className="icon is-small">
                  <i className="fas fa-image" />
                </span>
                <span>Pictures</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="fas fa-music" />
                </span>
                <span>Music</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="fas fa-film" />
                </span>
                <span>Videos</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="fas fa-file-text-o" />
                </span>
                <span>Documents</span>
              </a>
            </li>
          </ul>
        </div>
        <br />
        <div className="tabs is-toggle is-toggle-rounded">
          <ul>
            <li className="is-active">
              <a>
                <span className="icon is-small">
                  <i className="fas fa-image" />
                </span>
                <span>Pictures</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="fas fa-music" />
                </span>
                <span>Music</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="fas fa-film" />
                </span>
                <span>Videos</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="fas fa-file-text-o" />
                </span>
                <span>Documents</span>
              </a>
            </li>
          </ul>
        </div>
        <br />
        <div className="tabs is-fullwidth">
          <ul>
            <li>
              <a>
                <span className="icon">
                  <i className="fas fa-angle-left" />
                </span>
                <span>Left</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon">
                  <i className="fas fa-angle-up" />
                </span>
                <span>Up</span>
              </a>
            </li>
            <li>
              <a>
                <span>Right</span>
                <span className="icon">
                  <i className="fas fa-angle-right" />
                </span>
              </a>
            </li>
          </ul>
        </div>
        <br />
        <div className="tabs is-centered is-boxed">
          <ul>
            <li className="is-active">
              <a>
                <span className="icon is-small">
                  <i className="fas fa-image" />
                </span>
                <span>Pictures</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="fas fa-music" />
                </span>
                <span>Music</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="fas fa-film" />
                </span>
                <span>Videos</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="fas fa-file-text-o" />
                </span>
                <span>Documents</span>
              </a>
            </li>
          </ul>
        </div>
        <br />
        <div className="tabs is-toggle is-fullwidth is-large">
          <ul>
            <li className="is-active">
              <a>
                <span className="icon">
                  <i className="fas fa-image" />
                </span>
                <span>Pictures</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon">
                  <i className="fas fa-music" />
                </span>
                <span>Music</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon">
                  <i className="fas fa-film" />
                </span>
                <span>Videos</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon">
                  <i className="fas fa-file-text-o" />
                </span>
                <span>Documents</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
