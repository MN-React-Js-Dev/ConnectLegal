import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../assets/css/second-container.scss";
import img3 from "../assets/images/Group 300.jpg";

import Button from "react-bootstrap/Button";
import { FaArrowRight } from "react-icons/fa";

function Secondcontainer() {
  return (
    <>
      <section class="discounts-section">
        <div class="container">
          <div class="row reorder align-items-center justify-content-between">
            <div id="side_panel" class="col-md-6 col-lg-5">
              <div class="discount-heading">
                <h2 class="h2 heading-h2">
                  <span className="green-heading-two heading-data">
                    We connect clients and Legal Consultants
                  </span>{" "}
                  in one platform.
                </h2>
                <p class="p">
                  Make an appointment with Advocates and Legal consultancy,
                  Today! or chat with a lawyer online for free in Dubai and
                  across UAE now. We provide legal Services by connecting you
                  with the Legal Consultants, Or you can even hire a Lawyer for
                  your Legal issues. You can also read our blogs which provides
                  some of the vital informations.
                </p>
                <Button variant="primary">
                  <span className="btn-text">Connect Now</span>
                  <span className="icon">
                    <FaArrowRight />
                  </span>
                </Button>
              </div>
            </div>
            <div id="mainContentRight" class="col-md-6">
              <img class="discounts-img " src={img3} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Secondcontainer;
