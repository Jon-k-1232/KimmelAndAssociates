import React from "react"
import Footer from "../components/footer/footer.js"
import Header from "../components/header/header.js"

const Connect = () => {
  return (
    <div className="connectPage">
      <Header />
      <div className="connectWrapper">
        <div className="upperConnect">
          <div className="upperText">
            <h4>LEARN HOW WE CAN HELP</h4>
            <h1>Connect With Us</h1>
          </div>
        </div>

        <div className="LowerConnect">
          <div id="connectPhrase">
            <p>
              It's important to learn what it's like to work with us.
              Relationships built on trust is a foundation for success.
            </p>
          </div>

          <div className="connectAddress">
            <div>
              <p>Address:</p>
            </div>
            <div>
              <p>
                16421 N. Tatum Blvd Suite 120
                <br /> Phoenix, AZ 85032
              </p>
            </div>
            <div>
              <p>Phone:</p>
            </div>
            <div>
              <p>(602)788-0903</p>
            </div>
            <div>
              <p>Email:</p>
            </div>
            <div>
              <p>
                <a
                  id="emailLink"
                  href="mailto:aspire@jimkimmel.com?"
                  rel="EMAIL"
                >
                  {" "}
                  Aspire@JimKimmel.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Connect
