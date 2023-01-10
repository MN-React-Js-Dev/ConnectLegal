import React from "react";
import "./home.scss";
import frame from "../../assets/images/Frame.png";
import frame1 from "../../assets/images/Vectoradfasd.png";
import frame2 from "../../assets/images/Group 196.png";
import { FaChevronRight } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <section class="three-step-section">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="row align-items-center justify-content-between">
              <div className="title-text">
                <h2 className="text">PROCESS</h2>
                <b>
                  <h2 className="text1">3 STEPS FOR </h2>
                  <h2 className="text2">
                    {" "}
                    Appointment{" "}
                    <span className="text3">
                      Process for <br />
                      Legal Services
                    </span>
                  </h2>
                </b>
              </div>
              <div id="mainContentRight1" class="col-md-3 hover-zoom card-wrap">
                <h1 className="card1-number">1</h1>
                <img src={frame} alt="img" className="frame" />
                <h2 className="content">
                  Search Best Lawyer for Online Consultation
                </h2>
                <div className="btn1 btn">
                  See more{" "}
                  <span className="icon">
                    <FaChevronRight />
                  </span>
                </div>
              </div>
              <div id="mainContentRight2" class="col-md-3 hover-zoom card-wrap">
                <h1 className="card2-number">2</h1>
                <img src={frame1} alt="img" className="frame-1" />
                <h2 className="content">View Lawyer profile</h2>
                <div className="btn2 btn">
                  See more{" "}
                  <span className="icon">
                    <FaChevronRight />
                  </span>
                </div>
              </div>
              <div id="mainContentRight3" class="col-md-3 hover-zoom card-wrap">
                <h1 className="card3-number">3</h1>
                <img src={frame2} alt="img" className="frame-2" />
                <h2 className="content">
                  Get Instant Lawyer <br />
                  Appointment
                </h2>
                <div className="btn3 btn">
                  See more{" "}
                  <span className="icon">
                    <FaChevronRight />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
