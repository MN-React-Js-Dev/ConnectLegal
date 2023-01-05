import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../assets/css/third-container.css";
import img1 from "../assets/images/Ellipse 3.png";
import img2 from "../assets/images/Group 148.png";
import img3 from "../assets/images/Group 149.png";
import imgData from "../assets/images/Group 65.jpg";

function secondcontainer() {
  return (
    <>
    <section className="features_ask_and_book">
      <Container className="main-container">
        <Row class="row">
          <Col className="first-container">
            <h1 className="first-container-test">My Question #98</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </p>
            <b>
              <p className="first-container-test">Answers (3)</p>
            </b>
            <div className="user-data">
              <img src={img1} className="img-data" />
              <span>
                <b>Jaidev Kumar</b>
              </span>
            </div>
            <br />
            <div className="user-data-data">
              <img src={img2} className="img-data" />{" "}
              <span>
                <b>George Brown</b>
              </span>
            </div>
            <br />
            <div className="user-data-data">
              <img src={img3} className="img-data" />{" "}
              <span>
                <b>Denali Balan</b>{" "}
              </span>
            </div>
          </Col>
          <Col className="second-container">
            <h3 className="first-container-test">FEATURES</h3>
            <h1 className="first-container-test">
              Ask & Book <br /> Appointments{" "}
            </h1>{" "}
            <h1 className="test-sub"> with Multiple Lawyers</h1>
            <p>
              Make an appointment with Advocates and Legal consultancy, Today!
              or chat with a lawyer online for free in Dubai and across UAE now,
              We work on a wide range of legal matters. Our legal Services.
            </p>
            <img class="cstm_img_btn" src={imgData} />
          </Col>
        </Row>
      </Container>
      </section>
    </>
  );
}

export default secondcontainer;
