import React from "react"
import "./header.css"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header className="constantHead">
      <h1 id="companyName">
        <Link to="/">James F. Kimmel & Associates, Inc</Link>
      </h1>
      <nav className="mainNavbar">
        <div className="hamIcon">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <ol className="mainNavItems">
          <li id="about">
            <Link to="/about">ABOUT</Link>
          </li>
          <li id="connect">
            <Link to="/connect">CONNECT</Link>
          </li>
          <li id="login">
            <Link to="/sfp">SFP LOGIN</Link>
          </li>
        </ol>
      </nav>
    </header>
  )
}

export default Header
