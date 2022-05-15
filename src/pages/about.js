import React from "react"
import Footer from "../components/footer/footer.js"
import Header from "../components/header/header.js"
import TopView from "../components/topView/topView.js"
import dc from "../images/dc.jpg"
import coin from "../images/coin.jpg"
import cacti from "../images/cacti.jpg"
import starWars from "../images/starWars.jpg"
import swan from "../images/swan.jpg"
import stars from "../images/stars.jpg"
import Employee from "../components/Employee/Employee.js"

export default function About() {
  return (
    <div className="aboutPage">
      <Header />
      <div>
        <TopView
          image={stars}
          imageAlt="Looking at stars from narrow canyon."
          SayingLineOne="Your Valuable Team at"
          SayingLineTwo="James F. Kimmel & Associates, Inc"
        />

        <div className="lowerAbout">
          <div className="teamMembers">
            {employeeList.map(employ => (
              <Employee
                image={employ.image}
                imageAlt={employ.imageAlt}
                name={employ.name}
                position={employ.position}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

const employeeList = [
  {
    name: "James F. Kimmel",
    position: "PRESIDENT",
    image: dc,
    imageAlt: "Clear Vision",
  },
  {
    name: "Misty Segafredo",
    position: "OFFICE MANAGER",
    image: coin,
    imageAlt: "Money sitting on table",
  },
  {
    name: "Sidney Brinn",
    position: "ADMINISTRATION",
    image: cacti,
    imageAlt: "Saguaro cactus at night",
  },
  {
    name: "Jaimee Kimmel-Trujillo",
    position: "Billing",
    image: starWars,
    imageAlt: "starTroopers",
  },
  {
    name: "Marsha Johnson",
    position: "ACCOUNTING MANAGER",
    image: swan,
    imageAlt: "swan in pond.",
  },
]
