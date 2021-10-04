import React from 'react'
import Header from "./Header.jsx"
import Books from "./Books.jsx"
import Abouts from "./Abouts.jsx"
import Footer from "./Footer.jsx"
import Nav from "./Nav.jsx"
// asd

function App() {
  return (
    <div id="page-wrap">
      <Nav />
      {/* <nav className="navbar navbar-default navbar-fixed-top navbar-custom">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              My Library
            </a>
          </div>
          <ul className="nav navbar-nav pull-right">
            <li>
              <button className="btn btn-lg btn-outline">
                <i className="fa fa-graduation-cap" /> <span>Training</span>
              </button>
            </li>
          </ul>
        </div>
      </nav> */}
      <Header />
      {/* <header>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <img
                alt="Logo React GraphQL Academy"
                className="img-responsive logo-academy"
                src="/img/logo.png"
              />
              <div className="intro-text">
                <span className="skills">TITOLO</span>
              </div>
            </div>
          </div>
        </div>
      </header> */}

      <Books />
      {/* <section id="books">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>Books</h2>
              <hr className="star-primary" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="nav nav-pills text-center">FILTRI</ul>
            </div>
          </div>
          <div className="row book-list">LIBRI</div>
        </div>
      </section> */}

      <Abouts />
      {/* <section id="about" className="success">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>About The Library</h2>
              <hr className="star-light" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-lg-offset-2">
              <p>
                This library is an exercise for building UI in a{' '}
                <strong style={{ textDecoration: 'underline' }}>
                  declarative way
                </strong>
                . This web site will help you understand the fundamental piece
                of ReactJS, components. You'll learn how to break an app in
                components (AKA componentization) and flow data accross them.
              </p>
            </div>
            <div className="col-lg-4">
              <p>
                This ReactJS web site works, but it's not well implemented. The
                problem, the developer didn't think in React and there aren't
                many components. We challenge you to fork the repo an
                componentizise the app to unleash the power of ReactJS.
              </p>
            </div>
            <div className="col-lg-8 col-lg-offset-2 text-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="#"
                className="btn btn-lg btn-outline"
              >
                <i className="fa fa-code-fork" /> Fork me on Github
              </a>
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
      {/* <footer className="text-center">
        <div className="footer-above">
          <div className="container">
            <div className="row">
              <div className="footer-col col-md-4">
                <h3>Main Location</h3>
                <p>
                  <span>1 St. Katharine's Way</span>
                  <br />
                  <span>London, E1W 1UN</span>
                </p>
              </div>
              <div className="footer-col col-md-4">
                <h3>Around the Web</h3>
                <ul className="list-inline">
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="#0"
                      className="btn-social btn-outline"
                    >
                      <i className="fa fa-fw fa-github" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="#0"
                      className="btn-social btn-outline"
                    >
                      <i className="fa fa-fw fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://#0"
                      className="btn-social btn-outline"
                    >
                      <i className="fa fa-fw fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-col col-md-4">
                <h3>About us</h3>
                <p>
                  <a href="#0">Lorem ipsum</a>
                  <span>
                    lorem ipsum dolor sit amet, consectetur adipsum, sed diam
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  )
}

export default App
