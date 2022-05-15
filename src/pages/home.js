import React from "react"
import "./index.css"
import Footer from "../components/footer/footer.js"
import Header from "../components/header/header.js"
import Seo from "../components/seo/seo"
import mainHome from "../images/mainHome.jpg"
import table from "../images/table.jpg"
import TopView from "../components/topView/topView"
import ServiceItem from "../components/serviceItem/serviceItem"

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
          <div className="mainQoute">
            <h2>Expert Accounting and Tax Service</h2>
            <p id="qouteHead">
              Top Rated tax specialist with over <br />
              40 Years of Experience
            </p>
          </div>

          <div className="serviceItemWrapper">
            {serviceItems.map(item => (
              <ServiceItem
                image={item.image}
                imageAlt={item.imageAlt}
                label={item.label}
                labelDetail={item.labelDetail}
                // link={item.link}
              />
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}

const serviceItems = [
  {
    image: table,
    imageAlt: "Planning outcomes together.",
    label: "Taxes",
    labelDetail:
      "Licensed enrolled agent for all 50 states. Specializing in individual, s-corp, llc, c-corp,non-profit, and fiduciary return.",
    link: "/about",
  },
  {
    image: table,
    imageAlt: "Planning outcomes together.",
    label: "IRS Notices",
    labelDetail: "Receive an IRS notice and have questions? We can help!",
    link: "/about",
  },
  {
    image: table,
    imageAlt: "Planning outcomes together.",
    label: "Bookkeeping",
    labelDetail:
      "Quickbooks, financial statements, bank financial statements, and mortgage financial statements.",
    link: "/about",
  },
  {
    image: table,
    imageAlt: "Planning outcomes together.",
    label: "Trust and Estate Tax Planning",
    labelDetail:
      "Whether its your estate or a loved one's, we have your best interests in mind.",
    link: "/about",
  },
  {
    image: table,
    imageAlt: "Planning outcomes together.",
    label: "Multi-State Tax Preparation",
    labelDetail:
      "Whether you own a business, a vacation home, or are a US citizen abroad, we have you covered.",
    link: "/about",
  },
  {
    image: table,
    imageAlt: "Planning outcomes together.",
    label: "EIN & Business Planning",
    labelDetail:
      "Not only can we help obtain an employer identification number, but we can also help setup your business for success.",
    link: "/about",
  },
]

/*
 ** To deploy to cloudflare from command line:
 ** gatsby build
 ** wrangler publish
 */
