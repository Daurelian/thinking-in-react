import React from 'react'


const Header = (props) => (
  <header>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <img
            alt="Logo React GraphQL Academy"
            className="img-responsive logo-academy"
            src="/img/logo.png"
          />
          <div className="intro-text">
            <span className="skills">{props.title} </span>
            <p>{new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  </header>
)


export default Header
