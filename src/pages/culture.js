import React from "react"
import MidNav from "../components/midNav/midNav.js"
import Footer from "../components/footer/footer.js"
import Header from "../components/header/header.js"
import canyon from "../images/canyon.jpg"
import downCarrot from "../images/downCarrot.png"

const Culture = () => {
  return (
    <div className="culturePage">
      <Header />
      <div>
        <img
          src={canyon}
          alt="Looking up from narrow canyon."
          className="aboutCanyonImage"
        />
        <h1>
          We serve as your financial compass helping customize a plan to fit
          your goals
        </h1>
        <div className="downArrow bounce">
          <img src={downCarrot} alt="Down Carrot" />
        </div>
      </div>
      <MidNav />
      <div>
        <h2 id="beni">Benefits of Working With Us</h2>
        <h3 id="strive">We strive to exceed your expectations every day.</h3>
        <p id="promises">
          Our philosophy focuses on building and maintaining confident
          relationships. We focus on the client experience through competent
          professional advice, fine-tuning financial goals, transparent
          communication, and customized personal service.
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default Culture
