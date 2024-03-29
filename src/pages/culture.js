import React from "react"
import Footer from "../components/footer/footer.js"
import Header from "../components/header/header.js"
import canyon from "../images/canyon.jpg"
import TopView from "../components/topView/topView.js"

export default function Culture() {
  return (
    <div className="culturePage">
      <Header />
      <TopView
        image={canyon}
        imageClass="aboutCanyonImage"
        imageAlt="Looking up from narrow canyon."
        SayingLineOne="We serve as your financial compass"
        SayingLineTwo="Helping customize a plan to fit your goals"
      />
      <div className="lowerCulture">
        <div className="lowerText">
          <h2 id="beni">Benefits of Working With Us</h2>
          <h3 id="strive">We strive to exceed your expectations every day.</h3>
          <p id="promises">
            Our philosophy focuses on building and maintaining confident
            relationships. We focus on the client experience through competent
            professional advice, fine-tuning financial goals, transparent
            communication, and customized personal service.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
