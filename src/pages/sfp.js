import React from "react"
import Footer from "../components/footer/footer.js"
import Header from "../components/header/header.js"
import login from "../images/login.jpeg"
import TopView from "../components/topView/topView.js"

export default class Sfp extends React.Component {
  render() {
    return (
      <div className="sfpPage">
        <Header />
        <div className="loginWrapper">
          <TopView
            image={login}
            imageAlt="computer on desk"
            SayingLineOne="Partnering Together"
          />

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
