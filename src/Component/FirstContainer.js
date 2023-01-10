import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../assets/css/first-container.scss";
import img1 from "../assets/images/Vectordata.png";
import img2 from "../assets/images/Vector (1).png";
import img3 from "../assets/images/Vector (2).png";
import img4 from "../assets/images/Vector (3).png";
import GroupLogo from "../assets/images/Group-46.png";
import { FaArrowRight } from "react-icons/fa";

function FirstContainer() {
  return (
    <>
      <section className="hero-section-first">
        <Container className="first-main-container">
          <Row>
            <Col class="col-8 first-child-container">
              <div className="hero-logo">
                <img className="logo-hero-section" src={GroupLogo} />
              </div>
              <div className="content-text-wrap">
                <h1 className="text-white">
                  Get{" "}
                  <span className="online-Legal-text-color">
                    {" "}
                    Online Legal Support{" "}
                  </span>
                  <br /> Services
                </h1>
                <p className="text-white">
                  This Platform Provides an opportunity to Connect Lawyers or
                  <br />
                  Legal Consultants with for Legal Advice in UAE
                </p>
              </div>
              <Button variant="primary">
                <span className="btn-text">Connect Now</span>
                <span className="icon">
                  <FaArrowRight />
                </span>
              </Button>
            </Col>
            <Col class="col-4">
              <div className="hero-row-wrap">
                <div className="first-card-data hover-zoom">
                  <div class="container">
                    <div class="hero-row d-flex">
                      <div class="icon-wrap extra-class-for-css">
                        <img src={img1} className="img-data" />
                      </div>
                      <div class="text-wrap extra-class-for-css">
                        <h3>Find a Lawyer</h3>

                        <p>
                          This is a lorem ipsum and will be remplaced for
                          another text.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="second-card-data hover-zoom">
                  <div class="container">
                    <div class="hero-row d-flex">
                      <div class="icon-wrap extra-class-for-css">
                        <img src={img2} className="img-data" />
                      </div>
                      <div class="text-wrap extra-class-for-css">
                        <h3> Hire a Lawyer</h3>

                        <p>
                          This is a lorem ipsum and will be remplaced for
                          another text.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="third-card-data hover-zoom">
                  <div class="container">
                    <div class="hero-row d-flex">
                      <div class="icon-wrap extra-class-for-css">
                        <img src={img3} className="img-data" />
                      </div>
                      <div class="text-wrap extra-class-for-css">
                        <h3> Lawyers Services</h3>

                        <p>
                          This is a lorem ipsum and will be remplaced for
                          another text.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fourth-card-data  hover-zoom">
                  <div class="container">
                    <div class="hero-row d-flex">
                      <div class="icon-wrap extra-class-for-css">
                        <img src={img4} className="img-data" />
                      </div>
                      <div class="text-wrap extra-class-for-css">
                        <h3>Legal Blogs & articles</h3>

                        <p>
                          This is a lorem ipsum and will be remplaced for
                          another text.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="hero-analytics-wrap">
          <div className="hero-analytics">
            <div className="inner-block">
              <h1>257</h1>
              <p>Lawyers</p>
            </div>
            <div className="inner-block">
              <h1>22</h1>
              <p>Law Firm Partner</p>
            </div>
            <div className="inner-block">
              <h1>4,700</h1>
              <p>Solved Cases</p>
            </div>
            <div className="inner-block">
              <h1>2,014</h1>
              <p>Since</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FirstContainer;
