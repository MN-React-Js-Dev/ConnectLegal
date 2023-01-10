import React from "react";
import Button from "react-bootstrap/Button";
import ConectMobileImg from "../assets/images/conectMobile.png";
import GreenLogoImg from "../assets/images/green-logo.png";

import OnlineLawyerImg from "../assets/images/online-lawyer.png";
import ClarityEmployee from "../assets/images/clarity_employee.png";
import Hostpot from "../assets/images/hostpot.png";
import Comma from "../assets/images/comma.png";
import UserMen from "../assets/images/usermen.png";
import clientimg1 from "../assets/images/group-70.png";
import { FaArrowRight } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

const FindLeagalServices = () => {
  return (
    <>
      <section className="legal-consultancy-wrap">
        <div className="container findleagal-con">
          <div class="row align-items-center justify-content-between">
            <div class="col-sm-4">
              <div className="connect-mobile">
                {/* <img className="" src={ConectMobileImg} /> */}
                <div className="mobile-wrap">
                  <div className="mobile">
                    <div className="header">
                      <div className="img-wrap">
                        <img className="" src={GreenLogoImg} />
                      </div>
                    </div>
                    <div className="sub-header">
                      <div className="d-flex">
                        <div className="img-wrap">
                          {" "}
                          <img className="" src={OnlineLawyerImg} />
                        </div>
                        <h4> Lawyers Online</h4>
                      </div>
                      <div className="bottom-bar">
                        <p>Lawyers Online</p>
                        <p>
                          <span>
                            <FaGlobe />
                          </span>
                          All
                        </p>
                      </div>
                    </div>
                    <div className="main-screen">
                      <div className="inner-card-wrap">
                        <div className="user-info">
                          <div className="avatar">
                            <img src={clientimg1} alt="client-img" />
                            <span className="online"></span>
                          </div>
                          <div className="meta">
                            <h4>Madhav Yadav</h4>
                            <p>Abu Dhabi,UAE</p>
                          </div>
                        </div>
                        <div className="premium-badge">
                          <FaCrown />
                          <p>Premium</p>
                        </div>
                      </div>
                      <div className="inner-card-wrap">
                        <div className="user-info">
                          <div className="avatar">
                            <img src={clientimg1} alt="client-img" />
                            <span className="online"></span>
                          </div>
                          <div className="meta">
                            <h4>Madhav Yadav</h4>
                            <p>Abu Dhabi,UAE</p>
                          </div>
                        </div>
                        <div className="premium-badge">
                          <FaCrown />
                          <p>Premium</p>
                        </div>
                      </div>
                      <div className="inner-card-wrap">
                        <div className="user-info">
                          <div className="avatar">
                            <img src={clientimg1} alt="client-img" />
                            <span className="online"></span>
                          </div>
                          <div className="meta">
                            <h4>Madhav Yadav</h4>
                            <p>Abu Dhabi,UAE</p>
                          </div>
                        </div>
                      </div>
                      <div className="inner-card-wrap">
                        <div className="user-info">
                          <div className="avatar">
                            <img src={clientimg1} alt="client-img" />
                            <span className="online"></span>
                          </div>
                          <div className="meta">
                            <h4>Madhav Yadav</h4>
                            <p>Abu Dhabi,UAE</p>
                          </div>
                        </div>
                      </div>
                      <div className="inner-card-wrap">
                        <div className="user-info">
                          <div className="avatar">
                            <img src={clientimg1} alt="client-img" />
                            <span className="online"></span>
                          </div>
                          <div className="meta">
                            <h4>Madhav Yadav</h4>
                            <p>Abu Dhabi,UAE</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-7 right_cstm_legal_div">
              <p className="heading-leagal-service">
                BEST LAWYERS IN UAE FOR LEGAL SERVICES ONLINE
              </p>
              <h1 className="new_mobile_class">
                <span className="second_ehading_lagal_srvice">
                  Find legal Services
                </span>{" "}
                with one click and get your Legal Advice.
              </h1>

              <p>
                Make an appointment with Advocates and Legal consultancy, Today!
                or chat with a lawyer online for free in Dubai and across UAE
                now, We work on a wide range of legal matters. Our legal
                Services from the Legal staff is here to assist you with proper
                guidance...<span className="read_more">(read more)</span>{" "}
              </p>
              <div className="one-extra-wrap">
                <div class="row">
                  <div class="col-sm-4 one-extra">
                    <span className="custm-span-connact">
                      <img className="UserMen-img" src={UserMen} />
                      <p>Get Free Legal Advice</p>
                    </span>
                  </div>
                  <div class="col-sm-4 one-extra">
                    <span className="custm-span-connact">
                      <img className="UserMen-img" src={Hostpot} />
                      <p> Free online consultation</p>
                    </span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-4 one-extra">
                    <span className="custm-span-connact">
                      <img className="UserMen-img" src={Comma} />
                      <p>Free 24 hour legal advice</p>
                    </span>
                  </div>
                  <div class="col-sm-4 one-extra">
                    <span className="custm-span-connact">
                      <img className="UserMen-img" src={ClarityEmployee} />
                      <p>Hire a Lawyer</p>
                    </span>
                  </div>
                </div>
              </div>
              <br />
              <Button variant="primary">
                <span className="btn-text">Connect Now</span>
                <span className="icon">
                  <FaArrowRight />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FindLeagalServices;
