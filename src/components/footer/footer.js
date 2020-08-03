import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <footer className="constantFooter">
      <h4>Phoenix, Az 85032</h4>
      <ol className="socialFooter">
        <li>linkedin</li>
        <li>twitter</li>
        <li>facebook</li>
      </ol>
      <p>
        <a href="https://jonathonkimmel.com" id="jonLink">
          Developed by Jon Kimmel
        </a>
      </p>
    </footer>
  )
}

export default Footer
