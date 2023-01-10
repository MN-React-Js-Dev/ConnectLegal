import React from "react";
import "../assets/css/proservices.scss";
import appointment from "../assets/images/appointment.png";
import Button from "react-bootstrap/Button";
import { FaArrowRight } from "react-icons/fa";
import rigthsign from "../assets/images/vector-right.png";
import rightsignBrown from "../assets/images/vector-right-brown.png";

const ProServicesContainer = () => {
  return (
    <section className="prov-services-conatiner">
      <div Class="container">
        <div Class="row">
          <div Class="col-sm-6">
            <div Class="left-Container">
              <h2 className="pro-services">PRO Services</h2>
              <p className="appointment">
                Make an appointment with <strong>Advocates and Legal</strong>{" "}
                <br />
                consultancy, Today!{" "}
              </p>
              <div className="appointment-text">
                <div className="appointment-text-final">
                  <div className="appointment-sign-text">
                    <div className="right-sign">
                      <img src={rigthsign} alt="right" />
                    </div>
                    <div className="appointment-grp">
                      Make an appointment with Advocates.
                    </div>
                  </div>

                  <div className="appointment-sign-text">
                    <div className="right-sign">
                      <img src={rigthsign} alt="right" />
                    </div>
                    <div className="appointment-grp">
                      Make an appointment with Advocates.
                    </div>
                  </div>
                  <div className="appointment-sign-text">
                    <div className="right-sign">
                      <img src={rigthsign} alt="right" />
                    </div>
                    <div className="appointment-grp">
                      Make an appointment with Advocates.
                    </div>
                  </div>
                  <div className="appointment-sign-text">
                    <div className="right-sign">
                      <img src={rigthsign} alt="right" />
                    </div>
                    <div className="appointment-grp">
                      Make an appointment with Advocates.
                    </div>
                  </div>
                </div>

                <Button variant="primary">
                  <span className="btn-text">Connect Now</span>
                  <span className="icon">
                    <FaArrowRight />
                  </span>
                </Button>
              </div>
            </div>
          </div>
          <div Class="col-sm-6">
            <div Class="right-Container">
              <h2 className="legal-header">
                Legal Translation <br /> Services
              </h2>
              <p className="appointment">
                <strong>Make an appointment</strong> with Advocates and <br />{" "}
                Legal consultancy, Today!{" "}
              </p>
              <div className="appointment-text">
                <div className="appointment-text-final">
                  <div className="appointment-sign-text">
                    <div className="right-sign">
                      <img src={rightsignBrown} alt="right" />
                    </div>
                    <div className="appointment-grp">
                      Make an appointment with Advocates.
                    </div>
                  </div>

                  <div className="appointment-sign-text">
                    <div className="right-sign">
                      <img src={rightsignBrown} alt="right" />
                    </div>
                    <div className="appointment-grp">
                      Make an appointment with Advocates.
                    </div>
                  </div>
                  <div className="appointment-sign-text">
                    <div className="right-sign">
                      <img src={rightsignBrown} alt="right" />
                    </div>
                    <div className="appointment-grp">
                      Make an appointment with Advocates.
                    </div>
                  </div>
                  <div className="appointment-sign-text">
                    <div className="right-sign">
                      <img src={rightsignBrown} alt="right" />
                    </div>
                    <div className="appointment-grp">
                      Make an appointment with Advocates.
                    </div>
                  </div>
                </div>
                <Button variant="primary">
                  <span className="btn-text">Connect Now</span>
                  <span className="icon">
                    <FaArrowRight />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProServicesContainer;
