// @flow
import React from "react";

export default class Hero extends React.Component<> {
  render() {
    return (
      <section className="section" id="hero">
        <h1 className="title">Hero</h1>
        <hr />

        <section className="hero ">
          <div className="hero-head">
            <nav className="navbar">
              <div className="container">
                <div className="navbar-brand">
                  <a className="navbar-item">
                    <img
                      src="https://bulma.io/images/bulma-type-white.png"
                      alt="Logo"
                    />
                  </a>
                  <span
                    className="navbar-burger burger"
                    data-target="navbarMenuHero1"
                  >
                    <span />
                    <span />
                    <span />
                  </span>
                </div>
                <div id="navbarMenuHero1" className="navbar-menu">
                  <div className="navbar-end">
                    <a className="navbar-item is-active">Home</a>
                    <a className="navbar-item">Examples</a>
                    <a className="navbar-item">Documentation</a>
                    <div className="navbar-item has-dropdown is-hoverable">
                      <div className="navbar-link">More</div>
                      <div id="moreDropdown" className="navbar-dropdown ">
                        <a className="navbar-item " href="#">
                          <div className="level is-mobile">
                            <div className="level-left">
                              <div className="level-item">
                                <p>
                                  <strong>Extensions</strong>
                                  <br />
                                  <small>Side projects to enhance Bulma</small>
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <span className="navbar-item">
                      <a className="button is-primary is-inverted">
                        <span className="icon">
                          <i className="fas fa-download" />
                        </span>
                        <span>Download</span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          {/* Hero content: will be in the middle */}
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">Title</h1>
              <h2 className="subtitle">Subtitle</h2>
            </div>
          </div>
          {/* Hero footer: will stick at the bottom */}
          <div className="hero-foot">
            <nav className="tabs">
              <div className="container">
                <ul>
                  <li className="is-active">
                    <a>Overview</a>
                  </li>
                  <li>
                    <a>Modifiers</a>
                  </li>
                  <li>
                    <a>Grid</a>
                  </li>
                  <li>
                    <a>Elements</a>
                  </li>
                  <li>
                    <a>Components</a>
                  </li>
                  <li>
                    <a>Layout</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </section>
        <br />

        <section className="hero is-primary">
          {/* Hero head: will stick at the top */}
          <div className="hero-head">
            <nav className="navbar">
              <div className="container">
                <div className="navbar-brand">
                  <a className="navbar-item">
                    <img
                      src="https://bulma.io/images/bulma-type-white.png"
                      alt="Logo"
                    />
                  </a>
                  <span
                    className="navbar-burger burger"
                    data-target="navbarMenuHero2"
                  >
                    <span />
                    <span />
                    <span />
                  </span>
                </div>
                <div id="navbarMenuHero2" className="navbar-menu">
                  <div className="navbar-end">
                    <a className="navbar-item is-active">Home</a>
                    <a className="navbar-item">Examples</a>
                    <a className="navbar-item">Documentation</a>
                    <div className="navbar-item has-dropdown is-hoverable">
                      <div className="navbar-link">More</div>
                      <div id="moreDropdown" className="navbar-dropdown ">
                        <a className="navbar-item " href="#">
                          <div className="level is-mobile">
                            <div className="level-left">
                              <div className="level-item">
                                <p>
                                  <strong>Extensions</strong>
                                  <br />
                                  <small>Side projects to enhance Bulma</small>
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <span className="navbar-item">
                      <a className="button is-primary is-inverted">
                        <span className="icon">
                          <i className="fas fa-download" />
                        </span>
                        <span>Download</span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          {/* Hero content: will be in the middle */}
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">Title</h1>
              <h2 className="subtitle">Subtitle</h2>
            </div>
          </div>
          {/* Hero footer: will stick at the bottom */}
          <div className="hero-foot">
            <nav className="tabs">
              <div className="container">
                <ul>
                  <li className="is-active">
                    <a>Overview</a>
                  </li>
                  <li>
                    <a>Modifiers</a>
                  </li>
                  <li>
                    <a>Grid</a>
                  </li>
                  <li>
                    <a>Elements</a>
                  </li>
                  <li>
                    <a>Components</a>
                  </li>
                  <li>
                    <a>Layout</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </section>
        <br />

        <section className="hero is-link">
          {/* Hero head: will stick at the top */}
          <div className="hero-head">
            <nav className="navbar">
              <div className="container">
                <div className="navbar-brand">
                  <a className="navbar-item">
                    <img
                      src="https://bulma.io/images/bulma-type-white.png"
                      alt="Logo"
                    />
                  </a>
                  <span />
                  <span />
                  <span />
                </div>
                <div id="navbarMenuHero3" className="navbar-menu">
                  <div className="navbar-end">
                    <a className="navbar-item is-active">Home</a>
                    <a className="navbar-item">Examples</a>
                    <a className="navbar-item">Documentation</a>
                    <div className="navbar-item has-dropdown is-hoverable">
                      <div className="navbar-link">More</div>
                      <div id="moreDropdown" className="navbar-dropdown ">
                        <a className="navbar-item " href="#">
                          <div className="level is-mobile">
                            <div className="level-left">
                              <div className="level-item">
                                <p>
                                  <strong>Extensions</strong>
                                  <br />
                                  <small>Side projects to enhance Bulma</small>
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <span className="navbar-item">
                      <a className="button is-primary is-inverted">
                        <span className="icon">
                          <i className="fas fa-download" />
                        </span>
                        <span>Download</span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          {/* Hero content: will be in the middle */}
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">Title</h1>
              <h2 className="subtitle">Subtitle</h2>
            </div>
          </div>
          {/* Hero footer: will stick at the bottom */}
          <div className="hero-foot">
            <nav className="tabs">
              <div className="container">
                <ul>
                  <li className="is-active">
                    <a>Overview</a>
                  </li>
                  <li>
                    <a>Modifiers</a>
                  </li>
                  <li>
                    <a>Grid</a>
                  </li>
                  <li>
                    <a>Elements</a>
                  </li>
                  <li>
                    <a>Components</a>
                  </li>
                  <li>
                    <a>Layout</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </section>
        <br />

        <section className="hero is-info">
          {/* Hero head: will stick at the top */}
          <div className="hero-head">
            <nav className="navbar">
              <div className="container">
                <div className="navbar-brand">
                  <a className="navbar-item">
                    <img
                      src="https://bulma.io/images/bulma-type-white.png"
                      alt="Logo"
                    />
                  </a>
                  <span
                    className="navbar-burger burger"
                    data-target="navbarMenuHero4"
                  >
                    <span />
                    <span />
                    <span />
                  </span>
                </div>
                <div id="navbarMenuHero4" className="navbar-menu">
                  <div className="navbar-end">
                    <a className="navbar-item is-active">Home</a>
                    <a className="navbar-item">Examples</a>
                    <a className="navbar-item">Documentation</a>
                    <div className="navbar-item has-dropdown is-hoverable">
                      <div className="navbar-link">More</div>
                      <div id="moreDropdown" className="navbar-dropdown ">
                        <a className="navbar-item " href="#">
                          <div className="level is-mobile">
                            <div className="level-left">
                              <div className="level-item">
                                <p>
                                  <strong>Extensions</strong>
                                  <br />
                                  <small>Side projects to enhance Bulma</small>
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <span className="navbar-item">
                      <a className="button is-primary is-inverted">
                        <span className="icon">
                          <i className="fas fa-download" />
                        </span>
                        <span>Download</span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          {/* Hero content: will be in the middle */}
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">Title</h1>
              <h2 className="subtitle">Subtitle</h2>
            </div>
          </div>
          {/* Hero footer: will stick at the bottom */}
          <div className="hero-foot">
            <nav className="tabs">
              <div className="container">
                <ul>
                  <li className="is-active">
                    <a>Overview</a>
                  </li>
                  <li>
                    <a>Modifiers</a>
                  </li>
                  <li>
                    <a>Grid</a>
                  </li>
                  <li>
                    <a>Elements</a>
                  </li>
                  <li>
                    <a>Components</a>
                  </li>
                  <li>
                    <a>Layout</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </section>
        <br />

        <section className="hero is-success">
          {/* Hero head: will stick at the top */}
          <div className="hero-head">
            <nav className="navbar">
              <div className="container">
                <div className="navbar-brand">
                  <a className="navbar-item">
                    <img
                      src="https://bulma.io/images/bulma-type-white.png"
                      alt="Logo"
                    />
                  </a>
                  <span
                    className="navbar-burger burger"
                    data-target="navbarMenuHero5"
                  >
                    <span />
                    <span />
                    <span />
                  </span>
                </div>
                <div id="navbarMenuHero5" className="navbar-menu">
                  <div className="navbar-end">
                    <a className="navbar-item is-active">Home</a>
                    <a className="navbar-item">Examples</a>
                    <a className="navbar-item">Documentation</a>
                    <div className="navbar-item has-dropdown is-hoverable">
                      <div className="navbar-link">More</div>
                      <div id="moreDropdown" className="navbar-dropdown ">
                        <a className="navbar-item " href="#">
                          <div className="level is-mobile">
                            <div className="level-left">
                              <div className="level-item">
                                <p>
                                  <strong>Extensions</strong>
                                  <br />
                                  <small>Side projects to enhance Bulma</small>
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <span className="navbar-item">
                      <a className="button is-primary is-inverted">
                        <span className="icon">
                          <i className="fas fa-download" />
                        </span>
                        <span>Download</span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          {/* Hero content: will be in the middle */}
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">Title</h1>
              <h2 className="subtitle">Subtitle</h2>
            </div>
          </div>
          {/* Hero footer: will stick at the bottom */}
          <div className="hero-foot">
            <nav className="tabs">
              <div className="container">
                <ul>
                  <li className="is-active">
                    <a>Overview</a>
                  </li>
                  <li>
                    <a>Modifiers</a>
                  </li>
                  <li>
                    <a>Grid</a>
                  </li>
                  <li>
                    <a>Elements</a>
                  </li>
                  <li>
                    <a>Components</a>
                  </li>
                  <li>
                    <a>Layout</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </section>
        <br />

        <section className="hero is-warning">
          {/* Hero head: will stick at the top */}
          <div className="hero-head">
            <nav className="navbar">
              <div className="container">
                <div className="navbar-brand">
                  <a className="navbar-item">
                    <img
                      src="https://bulma.io/images/bulma-type-white.png"
                      alt="Logo"
                    />
                  </a>
                  <span
                    className="navbar-burger burger"
                    data-target="navbarMenuHero6"
                  >
                    <span />
                    <span />
                    <span />
                  </span>
                </div>
                <div id="navbarMenuHero6" className="navbar-menu">
                  <div className="navbar-end">
                    <a className="navbar-item is-active">Home</a>
                    <a className="navbar-item">Examples</a>
                    <a className="navbar-item">Documentation</a>
                    <div className="navbar-item has-dropdown is-hoverable">
                      <div className="navbar-link">More</div>
                      <div id="moreDropdown" className="navbar-dropdown ">
                        <a className="navbar-item " href="#">
                          <div className="level is-mobile">
                            <div className="level-left">
                              <div className="level-item">
                                <p>
                                  <strong>Extensions</strong>
                                  <br />
                                  <small>Side projects to enhance Bulma</small>
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <span className="navbar-item">
                      <a className="button is-primary is-inverted">
                        <span className="icon">
                          <i className="fas fa-download" />
                        </span>
                        <span>Download</span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          {/* Hero content: will be in the middle */}
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">Title</h1>
              <h2 className="subtitle">Subtitle</h2>
            </div>
          </div>
          {/* Hero footer: will stick at the bottom */}
          <div className="hero-foot">
            <nav className="tabs">
              <div className="container">
                <ul>
                  <li className="is-active">
                    <a>Overview</a>
                  </li>
                  <li>
                    <a>Modifiers</a>
                  </li>
                  <li>
                    <a>Grid</a>
                  </li>
                  <li>
                    <a>Elements</a>
                  </li>
                  <li>
                    <a>Components</a>
                  </li>
                  <li>
                    <a>Layout</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </section>
        <br />

        <section className="hero is-danger">
          {/* Hero head: will stick at the top */}
          <div className="hero-head">
            <nav className="navbar">
              <div className="container">
                <div className="navbar-brand">
                  <a className="navbar-item">
                    <img
                      src="https://bulma.io/images/bulma-type-white.png"
                      alt="Logo"
                    />
                  </a>
                  <span
                    className="navbar-burger burger"
                    data-target="navbarMenuHero7"
                  >
                    <span />
                    <span />
                    <span />
                  </span>
                </div>
                <div id="navbarMenuHero7" className="navbar-menu">
                  <div className="navbar-end">
                    <a className="navbar-item is-active">Home</a>
                    <a className="navbar-item">Examples</a>
                    <a className="navbar-item">Documentation</a>
                    <div className="navbar-item has-dropdown is-hoverable">
                      <div className="navbar-link">More</div>
                      <div id="moreDropdown" className="navbar-dropdown ">
                        <a className="navbar-item " href="#">
                          <div className="level is-mobile">
                            <div className="level-left">
                              <div className="level-item">
                                <p>
                                  <strong>Extensions</strong>
                                  <br />
                                  <small>Side projects to enhance Bulma</small>
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <span className="navbar-item">
                      <a className="button is-primary is-inverted">
                        <span className="icon">
                          <i className="fas fa-download" />
                        </span>
                        <span>Download</span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          {/* Hero content: will be in the middle */}
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">Title</h1>
              <h2 className="subtitle">Subtitle</h2>
            </div>
          </div>
          {/* Hero footer: will stick at the bottom */}
          <div className="hero-foot">
            <nav className="tabs">
              <div className="container">
                <ul>
                  <li className="is-active">
                    <a>Overview</a>
                  </li>
                  <li>
                    <a>Modifiers</a>
                  </li>
                  <li>
                    <a>Grid</a>
                  </li>
                  <li>
                    <a>Elements</a>
                  </li>
                  <li>
                    <a>Components</a>
                  </li>
                  <li>
                    <a>Layout</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </section>
        <br />

        <section className="hero is-white">
          {/* Hero head: will stick at the top */}
          <div className="hero-head">
            <nav className="navbar">
              <div className="container">
                <div className="navbar-brand">
                  <a className="navbar-item">
                    <img
                      src="https://bulma.io/images/bulma-type-white.png"
                      alt="Logo"
                    />
                  </a>
                  <span
                    className="navbar-burger burger"
                    data-target="navbarMenuHero8"
                  >
                    <span />
                    <span />
                    <span />
                  </span>
                </div>
                <div id="navbarMenuHero8" className="navbar-menu">
                  <div className="navbar-end">
                    <a className="navbar-item is-active">Home</a>
                    <a className="navbar-item">Examples</a>
                    <a className="navbar-item">Documentation</a>
                    <div className="navbar-item has-dropdown is-hoverable">
                      <div className="navbar-link">More</div>
                      <div id="moreDropdown" className="navbar-dropdown ">
                        <a className="navbar-item " href="#">
                          <div className="level is-mobile">
                            <div className="level-left">
                              <div className="level-item">
                                <p>
                                  <strong>Extensions</strong>
                                  <br />
                                  <small>Side projects to enhance Bulma</small>
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <span className="navbar-item">
                      <a className="button is-primary is-inverted">
                        <span className="icon">
                          <i className="fas fa-download" />
                        </span>
                        <span>Download</span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          {/* Hero content: will be in the middle */}
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">Title</h1>
              <h2 className="subtitle">Subtitle</h2>
            </div>
          </div>
          {/* Hero footer: will stick at the bottom */}
          <div className="hero-foot">
            <nav className="tabs">
              <div className="container">
                <ul>
                  <li className="is-active">
                    <a>Overview</a>
                  </li>
                  <li>
                    <a>Modifiers</a>
                  </li>
                  <li>
                    <a>Grid</a>
                  </li>
                  <li>
                    <a>Elements</a>
                  </li>
                  <li>
                    <a>Components</a>
                  </li>
                  <li>
                    <a>Layout</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </section>
        <br />

        <section className="hero is-black">
          {/* Hero head: will stick at the top */}
          <div className="hero-head">
            <nav className="navbar">
              <div className="container">
                <div className="navbar-brand">
                  <a className="navbar-item">
                    <img
                      src="https://bulma.io/images/bulma-type-white.png"
                      alt="Logo"
                    />
                  </a>
                  <span
                    className="navbar-burger burger"
                    data-target="navbarMenuHero9"
                  >
                    <span />
                    <span />
                    <span />
                  </span>
                </div>
                <div id="navbarMenuHero9" className="navbar-menu">
                  <div className="navbar-end">
                    <a className="navbar-item is-active">Home</a>
                    <a className="navbar-item">Examples</a>
                    <a className="navbar-item">Documentation</a>
                    <div className="navbar-item has-dropdown is-hoverable">
                      <div className="navbar-link">More</div>
                      <div id="moreDropdown" className="navbar-dropdown ">
                        <a className="navbar-item " href="#">
                          <div className="level is-mobile">
                            <div className="level-left">
                              <div className="level-item">
                                <p>
                                  <strong>Extensions</strong>
                                  <br />
                                  <small>Side projects to enhance Bulma</small>
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <span className="navbar-item">
                      <a className="button is-primary is-inverted">
                        <span className="icon">
                          <i className="fas fa-download" />
                        </span>
                        <span>Download</span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          {/* Hero content: will be in the middle */}
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">Title</h1>
              <h2 className="subtitle">Subtitle</h2>
            </div>
          </div>
          {/* Hero footer: will stick at the bottom */}
          <div className="hero-foot">
            <nav className="tabs">
              <div className="container">
                <ul>
                  <li className="is-active">
                    <a>Overview</a>
                  </li>
                  <li>
                    <a>Modifiers</a>
                  </li>
                  <li>
                    <a>Grid</a>
                  </li>
                  <li>
                    <a>Elements</a>
                  </li>
                  <li>
                    <a>Components</a>
                  </li>
                  <li>
                    <a>Layout</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </section>
        <br />

        <section className="hero is-light">
          {/* Hero head: will stick at the top */}
          <div className="hero-head">
            <nav className="navbar">
              <div className="container">
                <div className="navbar-brand">
                  <a className="navbar-item">
                    <img
                      src="https://bulma.io/images/bulma-type-white.png"
                      alt="Logo"
                    />
                  </a>
                  <span
                    className="navbar-burger burger"
                    data-target="navbarMenuHero10"
                  >
                    <span />
                    <span />
                    <span />
                  </span>
                </div>
                <div id="navbarMenuHero10" className="navbar-menu">
                  <div className="navbar-end">
                    <a className="navbar-item is-active">Home</a>
                    <a className="navbar-item">Examples</a>
                    <a className="navbar-item">Documentation</a>
                    <div className="navbar-item has-dropdown is-hoverable">
                      <div className="navbar-link">More</div>
                      <div id="moreDropdown" className="navbar-dropdown ">
                        <a className="navbar-item " href="#">
                          <div className="level is-mobile">
                            <div className="level-left">
                              <div className="level-item">
                                <p>
                                  <strong>Extensions</strong>
                                  <br />
                                  <small>Side projects to enhance Bulma</small>
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <span className="navbar-item">
                      <a className="button is-primary is-inverted">
                        <span className="icon">
                          <i className="fas fa-download" />
                        </span>
                        <span>Download</span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          {/* Hero content: will be in the middle */}
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">Title</h1>
              <h2 className="subtitle">Subtitle</h2>
            </div>
          </div>
          {/* Hero footer: will stick at the bottom */}
          <div className="hero-foot">
            <nav className="tabs">
              <div className="container">
                <ul>
                  <li className="is-active">
                    <a>Overview</a>
                  </li>
                  <li>
                    <a>Modifiers</a>
                  </li>
                  <li>
                    <a>Grid</a>
                  </li>
                  <li>
                    <a>Elements</a>
                  </li>
                  <li>
                    <a>Components</a>
                  </li>
                  <li>
                    <a>Layout</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </section>
        <br />

        <section className="hero is-dark">
          {/* Hero head: will stick at the top */}
          <div className="hero-head">
            <nav className="navbar">
              <div className="container">
                <div className="navbar-brand">
                  <a className="navbar-item">
                    <img
                      src="https://bulma.io/images/bulma-type-white.png"
                      alt="Logo"
                    />
                  </a>
                  <span
                    className="navbar-burger burger"
                    data-target="navbarMenuHero11"
                  >
                    <span />
                    <span />
                    <span />
                  </span>
                </div>
                <div id="navbarMenuHero11" className="navbar-menu">
                  <div className="navbar-end">
                    <a className="navbar-item is-active">Home</a>
                    <a className="navbar-item">Examples</a>
                    <a className="navbar-item">Documentation</a>
                    <div className="navbar-item has-dropdown is-hoverable">
                      <div className="navbar-link">More</div>
                      <div id="moreDropdown" className="navbar-dropdown ">
                        <a className="navbar-item " href="#">
                          <div className="level is-mobile">
                            <div className="level-left">
                              <div className="level-item">
                                <p>
                                  <strong>Extensions</strong>
                                  <br />
                                  <small>Side projects to enhance Bulma</small>
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <span className="navbar-item">
                      <a className="button is-primary is-inverted">
                        <span className="icon">
                          <i className="fas fa-download" />
                        </span>
                        <span>Download</span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          {/* Hero content: will be in the middle */}
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">Title</h1>
              <h2 className="subtitle">Subtitle</h2>
            </div>
          </div>
          {/* Hero footer: will stick at the bottom */}
          <div className="hero-foot">
            <nav className="tabs">
              <div className="container">
                <ul>
                  <li className="is-active">
                    <a>Overview</a>
                  </li>
                  <li>
                    <a>Modifiers</a>
                  </li>
                  <li>
                    <a>Grid</a>
                  </li>
                  <li>
                    <a>Elements</a>
                  </li>
                  <li>
                    <a>Components</a>
                  </li>
                  <li>
                    <a>Layout</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </section>
        <br />
      </section>
    );
  }
}
