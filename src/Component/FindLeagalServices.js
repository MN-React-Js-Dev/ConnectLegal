import React from 'react'
import ConectMobileImg from '../assets/images/conectMobile.png'
import ClarityEmployee from '../assets/images/clarity_employee.png'
import Hostpot from '../assets/images/hostpot.png'
import Comma from '../assets/images/comma.png'
import UserMen from '../assets/images/usermen.png'
import ArrowRight from '../assets/images/right_arrow.png'
import GreenLogoImg from "../assets/images/green-logo.png";
import OnlineLawyerImg from "../assets/images/online-lawyer.png";
import clientimg1 from "../assets/images/group-70.png";
import clientimg2 from "../assets/images/Ellipse 3 (1).png";
import clientimg3 from "../assets/images/Ellipse 5.png";
import clientimg4 from "../assets/images/Ellipse 7.png";
import clientimg5 from "../assets/images/Ellipse 8.png";
import { FaGlobe } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";

const FindLeagalServices = () => {
    return (
        <>
            <section className='legal_consultancy'>
                <div class="container findleagal_con">
                    <div class="row align-items-center justify-content-between">
                        {/* <div class="col-sm-4">
                            <img className='connect-mobile' src={ConectMobileImg} />
                        </div> */}
                          <div class="col-sm-4">
              <div className="connect-mobile">
                {/* <img className="" src={ConectMobileImg} /> */}
                <div className="mobile-wrap">
                  <div className="mobile">
                    <div className="header">
                      <div className="img-wrap">
                        <img className="img-wrap-data" src={GreenLogoImg} />
                      </div>
                    </div>
                    <div className="sub-header">
                      <div className="d-flex">
                        <div className="img-wrap">
                          {" "}
                          <img className="img-data" src={OnlineLawyerImg} />
                        </div>
                        <h4> Lawyers Online</h4>
                      </div>
                      <div className="bottom-bar">
                        <p className='first-p'>Lawyers Online</p>
                        <p className='second-p'>
                          <span className='second-span'>
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
                            <h4 className='first-card-h4'>Madhav Yadav</h4>
                            <p className='first-card-h4-p'>Abu Dhabi,UAE</p>
                          </div>
                        </div>
                        <div className="premium-badge">
                          <FaCrown />
                          <p >Premium</p>
                        </div>
                      </div>
                      <div className="inner-card-wrap">
                        <div className="user-info">
                          <div className="avatar">
                            <img src={clientimg2} alt="client-img" />
                            <span className="online"></span>
                          </div>
                          <div className="meta">
                            <h4>Rashid Ali</h4>
                            <p>Dubai, UAE</p>
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
                            <img src={clientimg3} alt="client-img" />
                            <span className="online"></span>
                          </div>
                          <div className="meta">
                            <h4>Arundhati Chawla</h4>
                            <p>Qatar</p>
                          </div>
                        </div>
                      </div>
                      <div className="inner-card-wrap">
                        <div className="user-info">
                          <div className="avatar">
                            <img src={clientimg4} alt="client-img" />
                            <span className="online"></span>
                          </div>
                          <div className="meta">
                            <h4>Rehan Abdul</h4>
                            <p>Turkey</p>
                          </div>
                        </div>
                      </div>
                      <div className="inner-card-wrap">
                        <div className="user-info">
                          <div className="avatar">
                            <img src={clientimg5} alt="client-img" />
                            <span className="online"></span>
                          </div>
                          <div className="meta">
                            <h4>William Wright</h4>
                            <p>Abu Dhabi, UAE</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                        <div class="col-sm-7 right_cstm_legal_div">
                            <p className='heading-leagal-service'>BEST LAWYERS IN UAE FOR LEGAL SERVICES ONLINE</p>
                            <h1 className='new_mobile_class'><span className='second_ehading_lagal_srvice'>Find legal Services</span> with one click and get your Legal Advice.</h1>

                            <p>Make an appointment with Advocates and Legal consultancy, Today! or chat with a lawyer online for free in Dubai and across UAE now, We work on a wide range of legal matters. Our legal Services from the Legal staff is here to assist you with proper guidance...<span className='read_more'>(read more)</span> </p>
                            <div class="row">
                                <div class="col-sm-4 one_extra">
                                    <span className='custm-span-connact'>
                                        <img className='UserMen_img' src={UserMen} />
                                        <b>Get Free Legal Advice</b>
                                    </span>
                                </div>
                                <div class="col-sm-4 one_extra">
                                    <span className='custm-span-connact'>
                                        <img className='UserMen_img' src={Hostpot} />
                                        <b> Free online consultation</b>
                                    </span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-4 one_extra">
                                    <span className='custm-span-connact'>
                                        <img className='UserMen_img' src={Comma} />
                                        <b>Free 24 hour legal advice</b>
                                    </span>
                                </div>
                                <div class="col-sm-4 one_extra ">
                                    <span className='custm-span-connact'>
                                        <img className='UserMen_img' src={ClarityEmployee} />
                                        <b>Hire a Lawyer</b>
                                    </span>
                                </div>
                            </div>
                            <br />
                            <div className='button_and_arrow hover-zoom'>
                                <button className='green_btn'>Contact now</button>
                                <span className='button_arrow_handle' ><img src={ArrowRight} /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
     
        </>
    )
}

export default FindLeagalServices