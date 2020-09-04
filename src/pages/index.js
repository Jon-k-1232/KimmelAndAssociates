import React from "react"
import "./index.css"
import Footer from "../components/footer/footer.js"
import Header from "../components/header/header.js"
import Carrot from "../components/carrot/carrot.js"
import mainHome from "../images/mainHome.jpg"
import table from "../images/table.jpg"
import Pier from "../images/Pier.jpg"

export default class Home extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="keywordSearch">
          <p>
            James F. Kimmel & Associates, Experienced and Trusted Accounting
            Services Serving Arizona. Personal Taxes, Corporate Taxes, Tax
            Planning, Estate Planning, Book Keeping, QuickBooks, Payroll, Tax
            Accountant.
          </p>
          <p>
            Taxes, Phoenix, Scottsdale, Glendale, Mesa, Tempe, Chandler, Cave
            Creek, Carefree, Litchfield, Buckeye, Sedona, Flagstaff Tucson,
            Prescott, Payson, Kingman. 2020 Taxes. IRS. Internal Revenue
            Service. IRS audit.
          </p>
          <p>
            85920, 86502, 86503, 85924, 86535, 85925, 86504, 86505, 85927,
            86506, 86507, 86508, 86538, 85930, 86540, 85932, 86028, 86544,
            86545, 86547, 85936, 86511, 86512, 85938, 86514, 86556, 85940,
            86515, 85602, 85603, 85605, 85606, 85655, 85607, 85608, 85609,
            85610, 85670, 85613, 85615, 85616, 85617, 85620, 85625, 85626,
            85627, 85630, 85632, 85650, 85636, 85635, 85671, 85638, 85643,
            85644, 86015, 86020, 86005, 86002, 86011, 86003, 86004, 86001,
            85931, 86022, 86023, 86016, 86024, 86053, 86035, 86036, 86038,
            86017, 86052, 86040, 86018, 86339, 86435, 86044, 86045, 86046,
            85532, 85502, 85501, 85135, 85539, 85541, 85547, 85542, 85544,
            85545, 85550, 85553, 85192, 85554, 85530, 85531, 85535, 85536,
            85543, 85548, 85546, 85551, 85552, 85922, 85533, 85534, 85540,
            85325, 85328, 85334, 85344, 85371, 85346, 85359, 85348, 85357,
            85320, 85322, 85323, 85392, 85396, 85326, 85377, 85329, 85327,
            85331, 85248, 85286, 85249, 85246, 85244, 85226, 85224, 85225,
            85127, 85335, 85264, 85268, 85269, 85337, 85296, 85233, 85234,
            85299, 85298, 85297, 85295, 85318, 85301, 85302, 85303, 85304,
            85305, 85308, 85312, 85306, 85311, 85310, 85307, 85395, 85338,
            85236, 85339, 85340, 85309, 85202, 85209, 85203, 85204, 85205,
            85206, 85207, 85208, 85210, 85211, 85212, 85213, 85214, 85215,
            85216, 85201, 85277, 85274, 85275, 85342, 85087, 85343, 85253,
            85382, 85381, 85380, 85385, 85345, 85383, 85060, 85069, 85044,
            85046, 85048, 85063, 85062, 85050, 85004, 85051, 85053, 85054,
            85061, 85064, 85065, 85083, 85082, 85002, 85079, 85078, 85075,
            85074, 85073, 85072, 85071, 85070, 85003, 85068, 85067, 85066,
            85080, 85085, 85043, 85011, 85012, 85013, 85015, 85016, 85017,
            85029, 85028, 85024, 85018, 85019, 85020, 85021, 85027, 85022,
            85023, 85026, 85010, 85009, 85042, 85041, 85040, 85039, 85005,
            85038, 85006, 85037, 85036, 85035, 85034, 85033, 85032, 85031,
            85007, 85030, 85008, 85014, 85086, 85076, 85025, 85045, 85001,
            85098, 85097, 85142, 85263, 85266, 85257, 85259, 85251, 85260,
            85261, 85262, 85267, 85256, 85252, 85254, 85255, 85258, 85250,
            85271, 85372, 85373, 85351, 85376, 85375, 85374, 85379, 85378,
            85387, 85388, 85281, 85283, 85280, 85284, 85285, 85287, 85282,
            85353, 85354, 85190, 85355, 85390, 85358, 85361, 85363, 86430,
            86442, 86429, 86439, 86431, 86021, 86441, 86427, 86426, 86413,
            86411, 86412, 86402, 86409, 86401, 86406, 86403, 86404, 86405,
            86432, 86444, 86440, 86446, 86433, 86434, 86443, 86436, 86437,
            85360, 86445, 86438, 86520, 85911, 85923, 85926, 85928, 86025,
            86030, 86031, 86032, 86033, 86034, 86039, 85929, 85933, 85934,
            85935, 86510, 86042, 86043, 86054, 85901, 85902, 85937, 86029,
            85939, 85912, 85941, 86047, 85942, 85321, 85645, 85601, 85738,
            85652, 85622, 85614, 85341, 85658, 85653, 85619, 85654, 85629,
            85633, 85634, 85639, 85713, 85712, 85711, 85714, 85709, 85701,
            85702, 85703, 85704, 85705, 85706, 85707, 85708, 85710, 85715,
            85734, 85745, 85746, 85747, 85748, 85749, 85750, 85751, 85752,
            85744, 85743, 85736, 85737, 85740, 85735, 85741, 85733, 85742,
            85739, 85754, 85755, 85756, 85730, 85728, 85717, 85726, 85718,
            85719, 85720, 85724, 85721, 85731, 85725, 85775, 85732, 85757,
            85723, 85722, 85716, 85641, 85119, 85120, 85178, 85117, 85123,
            85121, 85122, 85193, 85194, 85130, 85128, 85131, 85132, 85118,
            85137, 85618, 85138, 85139, 85623, 85141, 85145, 85147, 85631,
            85143, 85140, 85172, 85173, 85191, 85611, 85628, 85621, 85662,
            85624, 85648, 85637, 85646, 85640, 86320, 86321, 85324, 86322,
            86323, 86324, 85332, 86325, 86326, 86343, 86327, 86329, 86331,
            86332, 86342, 86333, 86334, 86301, 86302, 86303, 86313, 86304,
            86305, 86315, 86312, 86314, 86335, 86351, 86341, 86340, 86336,
            86337, 86338, 85362, 85333, 85336, 85347, 85349, 85350, 85352,
            85356, 85364, 85365, 85366, 85367, 85369,{" "}
          </p>
        </div>
        <Header />
        <div className="homePage">
          <div className="mainTop">
            <img
              src={mainHome}
              alt="Every Cent Counts."
              className="mainHomeImage"
            />
            <h1 id="mainHomeTopText">Every Cent Counts.</h1>
            <Carrot />
          </div>
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
        </div>
        <Footer />
      </div>
    )
  }
}
