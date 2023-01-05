import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../assets/css/second-container.css";
import img3 from "../assets/images/Group 300.jpg";
import img1 from "../assets/images/Group 65.jpg";
function Secondcontainer() {
  return (
    <>
      <section className="we_coonect_section">
        <Container className="main-container-data">
          <Row>
            <Col className="col-7 cstm_col_we_connect">
              <h2>
                <span className="first-container-test">
                  We connect clients and <br />Legal  
                </span> Consultants in one platform.
              </h2>
              <p className="second_container_para">
                Make an appointment with Advocates and Legal consultancy, Today!
                or chat with a lawyer online for free in Dubai and across UAE
                now. We provide legal Services by connecting you with the Legal
                Consultants, Or you can even hire a Lawyer for your Legal
                issues. You can also read our blogs which provides some of the
                vital informations.
              </p>
              <img class="cstm_img_btn" src={img1} />
            </Col>
            <Col className="col-5">
              <img src={img3} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Secondcontainer;
