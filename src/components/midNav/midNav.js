import { Link } from "gatsby"
import React from "react"
import "./midNav.css"

export default function MidNav() {
  return (
    <div id="middleAbout">
      <nav className="subNavAbout">
        <ul>
          <li id="aboutSub">
            <Link to="/about">Team</Link>
          </li>
          <hr />
          <li id="cultureSub">
            <Link to="/culture">Culture</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
