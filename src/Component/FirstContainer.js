import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../assets/css/first-container.css";
import imgData from "../assets/images/Group 65.jpg";
import img1 from "../assets/images/Vectordata.png";
import img2 from "../assets/images/Vector (1).png";
import img3 from "../assets/images/Vector (2).png";
import img4 from "../assets/images/Vector (3).png";
import GroupLogo from "../assets/images/Group-46.png";

function FirstContainer() {
  return (
    <>
      <section className="hero_section_first">
        <Container className="first-main-container">
          <Row>
            <Col class="col-8 first-child-container">
 
              <img className="logo_hero_section" src={GroupLogo}/>
               <br />
              <h1 className="text-white">
                Get{" "}
                <span className="online-Legal-text-color">
                  {" "}
                  Online Legal Support{" "}
                </span>
                <br /> Services
              </h1>
              <p className="text-white">
                This Platform Provides an opportunity to Connect Lawyers or<br/>
                Legal Consultants with for Legal Advice in
                UAE
              </p>
              <img class="btn_hero_long hover-zoom" src={imgData} />
            </Col>
            <Col class="col-4">
              <div className="first-card-data hover-zoom">
                <div class="container">
                  <div class="row">
                    <div class="col-sm-2 extra_class_for_css">
                      <img src={img1} className="img-data" />
                    </div>
                    <div class="col-sm m-2 extra_class_for_css">
                      <span>
                        <b>Find a Lawyer</b>
                      </span>
                      <br />
                      <span>
                        This is a lorem ipsum and will be remplaced for another
                        text.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="second-card-data hover-zoom">
                <div class="container">
                  <div class="row">
                    <div class="col-sm-2">
                      <img src={img2} className="img-data" />
                    </div>
                    <div class="col-sm m-2">
                      <span>
                        <b> Hire a Lawyer</b>
                      </span>
                      <br />
                      <span>
                        This is a lorem ipsum and will be remplaced for another
                        text.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="third-card-data hover-zoom">
                <div class="container">
                  <div class="row">
                    <div class="col-sm-2">
                      <img src={img3} className="img-data" />
                    </div>
                    <div class="col-sm m-2">
                      <span>
                        <b> Lawyers Services</b>
                      </span>
                      <br />
                      <span>
                        This is a lorem ipsum and will be remplaced for another
                        text.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="fourth-card-data  hover-zoom">
                <div class="container">
                  <div class="row">
                    <div class="col-sm-2">
                      <img src={img4} className="img-data" />
                    </div>
                    <div class="col-sm m-2">
                      <span>
                        <b>Legal Blogs & articles</b>
                      </span>
                      <br />
                      <span>
                        This is a lorem ipsum and will be remplaced for another
                        text.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default FirstContainer;
