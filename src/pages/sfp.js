import React from "react"
import Footer from "../components/footer/footer.js"
import Header from "../components/header/header.js"

const Sfp = () => {
  return (
    <div className="sfpPage">
      <Header />
      <div className="loginWrapper">
        <div className="loginTop">
          <h1>Partnering Together</h1>
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

export default Sfp
