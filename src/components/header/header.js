import React from "react"
import "./header.css"
import { Link } from "gatsby"

export default class Header extends React.Component {
  state = {
    menuDisplay: false,
  }

  // handles pop out menu showing
  hamburger = () => this.setState({ menuDisplay: !this.state.menuDisplay })

  render() {
    return (
      <header className="constantHead">
        <h1 id="companyName">
          <Link to="/">James F. Kimmel & Associates, Inc</Link>
        </h1>
        <nav className="mainNavbar">
          <div className="topNav">
            <div
              className={
                this.state.menuDisplay ? "hamburger change" : "hamburger"
              }
              aria-hidden
              id="menu-icon"
              type="button"
              onClick={this.hamburger}
            >
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
            <ol
              className={
                this.state.menuDisplay ? "menuItems open" : "menuItems"
              }
              aria-hidden
              onClick={() => this.setState({ menuDisplay: false })}
            >
              <li id="about">
                <Link to="/about">TEAM</Link>
              </li>
              <li id="culture">
                <Link to="/culture">CULTURE</Link>
              </li>
              <li id="connect">
                <Link to="/connect">CONNECT</Link>
              </li>
              <li id="login">
                <Link to="/sfp">SFP LOGIN</Link>
              </li>
            </ol>
          </div>
        </nav>
      </header>
    )
  }
}
