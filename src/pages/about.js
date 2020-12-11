import React from "react"
import Footer from "../components/footer/footer.js"
import Header from "../components/header/header.js"
import Carrot from "../components/carrot/carrot.js"
import dc from "../images/dc.jpg"
import coin from "../images/coin.jpg"
import cacti from "../images/cacti.jpg"
//import beach from "../images/beach.jpg"
import disney from "../images/disney.jpg"
import starWars from "../images/starWars.jpg"
import swan from "../images/swan.jpg"
import stars from "../images/stars.jpg"

export default class About extends React.Component {
  render() {
    return (
      <div className="aboutPage">
        <Header />
        <div>
          <div>
            <img
              src={stars}
              alt="Looking at stars from narrow canyon."
              className="aboutStarsImage"
            />
            <div className="topWordsAbout">
              <h1>
                Your Valuable Team at
                <br />
                James F. Kimmel & Associates, Inc
              </h1>
            </div>
            <Carrot />
          </div>
          <div className="lowerAbout">
            <div className="teamMembers">
              <div className="crow">
                <img src={dc} alt="Clear Vision" className="visionImageMain" />
                <h3>James F. Kimmel</h3>
                <p>PRESIDENT</p>
              </div>

              <div className="employeeOne">
                <img
                  src={coin}
                  alt="money sitting on table"
                  className="employeeOneImage"
                />
                <h3>Misty Segafredo</h3>
                <p>OFFICE MANAGER</p>
              </div>

              <div className="employeeTwo">
                <img
                  src={cacti}
                  alt="saguaro cactus at night"
                  className="employeeTwoImage"
                />
                <h3>Sidney Brinn</h3>
                <p>RECEPTIONIST</p>
              </div>

              {/*
              <div className="employeeThree">
                <img
                  src={beach}
                  alt="waves crashing on rocks"
                  className="employeeThreeImage"
                />
                <h3>Employee Three Name Here</h3>
                <p>Job Title</p>
              </div>
              */}

              <div className="employeeFour">
                <img
                  src={disney}
                  alt="mickey ears on girl at disneyland"
                  className="employeeFourImage"
                />
                <h3>Jaclyn Kimmel-Cano</h3>
                <p>MARKETING</p>
              </div>

              <div className="employeeFive">
                <img
                  src={starWars}
                  alt="starTroopers"
                  className="employeeFiveImage"
                />
                <h3>Jaimee Kimmel-Trujillo</h3>
                <p>INSURANCE AGENT</p>
              </div>

              <div className="employeeSix">
                <img
                  src={swan}
                  alt="swan in pond."
                  className="employeeSixImage"
                />
                <h3>Marsha Johnson</h3>
                <p>ACCOUNTING MANAGER</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
