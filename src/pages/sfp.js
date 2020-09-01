import React from "react"
import Footer from "../components/footer/footer.js"
import Header from "../components/header/header.js"
import Carrot from "../components/carrot/carrot.js"
import login from "../images/login.jpeg"

export default class Sfp extends React.Component {
  render() {
    return (
      <div className="sfpPage">
        <Header />
        <div className="loginWrapper">
          <div className="loginTop">
            <img src={login} alt="computer on desk" className="loginImage" />
            <div className="topWordsSfp">
              <h1>Partnering Together</h1>
            </div>
            <Carrot />
          </div>
          <div className="loginBottom">
            <h3>Uploading documents has never been easier.</h3>
            <a href="https://taxcents.securefilepro.com/">
              <button id="logIn">Secure File</button>
            </a>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
