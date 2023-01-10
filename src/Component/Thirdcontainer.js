import React from "react";
import "../assets/css/third-container.scss";
import img1 from "../assets/images/Ellipse 3.png";
import img2 from "../assets/images/Group 148.png";
import img3 from "../assets/images/Group 149.png";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import Button from "react-bootstrap/Button";
import { FaArrowRight } from "react-icons/fa";

function secondcontainer() {
  return (
    <>
      <section class="my-question">
        <div class="container cstm-container-formy-question">
          <div class="row align-items-center justify-content-between">
            <div class="row align-items-center justify-content-between">
              <div
                id="kandda"
                class="col-md-6 col-lg-5 col-12 col-lg-4 d-flex align-items-stretch"
              >
                <div class="card new-question-card ">
                  <h1 className="first-container-heading-m">My Question #98</h1>
                  <p className="first-container-para-m1">
                    {" "}
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>{" "}
                  <p className="selected-filter">28/Nov/2022 - 10:40</p>
                  <div className="header">
                    <p className="">Answers (3)</p>{" "}
                    <div className="filter">
                      <Dropdown>
                        <Dropdown.Toggle variant="" id="dropdown-basic">
                          Relevant
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown className="ml-3">
                        <Dropdown.Toggle variant="" id="dropdown-basic">
                          Date
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">7</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">8</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">9</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <div className="user-data-wrap">
                    <div className="user-data no-accordian">
                      <div className="user-avatar">
                        <img src={img1} className="img-data" />
                      </div>
                      <div className="meta-data">
                        <h3>Jaidev Kumar</h3>
                        <div className="d-n-t">
                          <span>28/Nov/2022</span>-<span>12:12</span>
                        </div>
                      </div>
                    </div>
                    <div className="user-data ">
                      <div className="user-avatar">
                        <img src={img2} className="img-data" />{" "}
                      </div>
                      <div className="meta-data">
                        <h3>George Brown</h3>
                        <div className="d-n-t">
                          <span>02/Dic/2022</span>
                          <span>8:01</span>
                        </div>
                      </div>
                    </div>
                    <div className="user-data ">
                      <div className="user-avatar">
                        <img src={img3} className="img-data" />{" "}
                      </div>
                      <div className="meta-data">
                        <h3>Denali Balan</h3>
                        <div className="d-n-t">
                          <span>05/Dic/2022</span>-<span>05:33</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="mainContentRight" class="col-md-6 right-content-wrap">
                <span className="green-span-featurs-question">FEATURES</span>
                <h1>
                  <span className="first-container-test">
                    Ask & Book Appointments{" "}
                  </span>
                  with Multiple Lawyers
                </h1>
                <p className="first-container-para-m2">
                  Make an appointment with Advocates and Legal consultancy,
                  Today! or chat with a lawyer online for free in Dubai and
                  across UAE now, We work on a wide range of legal matters. Our
                  legal Services.
                </p>
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
      </section>
    </>
  );
}

export default secondcontainer;
