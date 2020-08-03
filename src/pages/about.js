import React from "react"
import MidNav from "../components/midNav/midNav.js"
import Footer from "../components/footer/footer.js"
import Header from "../components/header/header.js"

const About = () => {
  return (
    <div>
      <Header />
      <div className="aboutWrapper">
        <div id="upperAbout">
          <div id="topWordsAbout">
            <h1>
              Your Valuable Team at
              <br />
              James F. Kimmel & Associates, Inc
            </h1>
          </div>
        </div>
        <MidNav />
        <div id="lowerAbout">
          <section className="teamMembers">
            <div className="crow">
              <h3>James F. Kimmel</h3>
              <p>PRESIDENT</p>
            </div>

            <div className="employeeOne">
              <h3>Misty Segafredo</h3>
              <p>OFFICE MANAGER</p>
            </div>

            <div className="employeeTwo">
              <h3>Sidney Brinn</h3>
              <p>RECEPTIONIST</p>
            </div>

            <div className="employeeThree">
              <h3>Katrina Will</h3>
              <p>ADMINISTRATIVE ASSISTANT</p>
            </div>

            <div className="employeeFour">
              <h3>Jaclyn Kimmel-Cano</h3>
              <p>SENIOR MARKETING MANAGER</p>
            </div>

            <div className="employeeFive">
              <h3>Jaimee Kimmel-Trujillo</h3>
              <p>INSURANCE AGENT</p>
            </div>

            <div className="employeeSix">
              <h3>Marsha Johnson</h3>
              <p>CPA</p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
