import React from "react"
import "./index.css"
import Footer from "../components/footer/footer.js"
import Header from "../components/header/header.js"
import Seo from "../components/seo/seo"
import mainHome from "../images/mainHome.jpg"
import table from "../images/table.jpg"
import Pier from "../images/Pier.jpg"
import TopView from "../components/topView/topView"

export default function Home() {
  return (
    <div className="main">
      <Seo />
      <Header />
      <TopView
        image={mainHome}
        imageAlt="Every Cent Counts."
        SayingLineOne="Every Cent Counts."
      />
      <div className="mainBottom">
        <main className="contentContainer">
          <blockquote className="mainQoute">
            <h2>We Assist You</h2>
            <p id="qouteHead">
              in Saving and Accumulating Money on a Tax-Deferred Basis
            </p>
          </blockquote>

          <div className="middleBoxHome">
            <div className="partnerSection">
              <div className="partnerAlign">
                <img
                  src={table}
                  alt="Planning outcomes together."
                  className="partnerImageMain"
                />
              </div>
              <div className="partnerText">
                <h3 id="partnerHeader">Partnering with You</h3>
                <h4 id="partnerDetails">
                  RELATIONSHIPS BUILT ON <br />
                  TRUST, COMPETENT ADVICE, <br />
                  COMMUNICATION, AND SERVICE.
                </h4>
              </div>
            </div>
          </div>

          <div className="endBoxHome">
            <div className="visionSection">
              <div className="visionAlign">
                <img
                  src={Pier}
                  alt="Clear Vision"
                  className="visionImageMain"
                />
              </div>
              <div className="visionText">
                <h3 id="visionHeader">Guidance & Vision</h3>
                <h4 id="visionDetails">
                  ACCOUNTING STRATEGIES BASED ON
                  <br />
                  OVER 35 YEARS OF TAX
                  <br />
                  KNOWLEDGE AND EXPERIENCE.
                </h4>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}

/*
 ** To deploy to cloudflare from command line:
 ** gatsby build
 ** wrangler publish
 */
