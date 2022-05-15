import React from "react"
import Footer from "../components/footer/footer.js"
import Header from "../components/header/header.js"
import beachFam from "../images/beachFam.jpg"
import TopView from "../components/topView/topView.js"

export default function Connect() {
  return (
    <div className="connectPage">
      <Header />
      <div className="connectWrapper">
        <TopView
          image={beachFam}
          imageAlt="Family in at beach with sunset"
          SayingLineOne="LEARN HOW WE CAN HELP"
          SayingLineTwo="Connect With Us"
          classLabel="topWordsConnect"
          typography={true}
        />

        <div className="LowerConnect">
          <div id="connectPhrase">
            <p>
              It's important to learn what it's like to work with us.
              Relationships built on trust is a foundation for success.
            </p>
          </div>

          <div className="connectAddress">
            <div style={style.typeGroup}>
              <div style={style.type}>
                <p>Address:</p>
              </div>
              <div>
                <p>
                  16421 N. Tatum Blvd Suite 120
                  <br /> Phoenix, AZ 85032
                </p>
              </div>
            </div>
            <div style={style.typeGroup}>
              <div style={style.type}>
                <p>Phone:</p>
              </div>
              <div>
                <p>(602)788-0903</p>
              </div>
            </div>
            <div style={style.typeGroup}>
              <div style={style.type}>
                <p>Email:</p>
              </div>
              <div>
                <p>
                  <a
                    id="emailLink"
                    href="mailto:aspire@jimkimmel.com?"
                    rel="EMAIL"
                  >
                    Aspire@JimKimmel.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

const style = {
  typeGroup: {
    display: "flex",
  },
  type: {
    width: "6em",
  },
}
