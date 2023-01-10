import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import eye from "../assets/images/eye.png";
import Are_You from "../assets/images/Are_You.png";
import "../assets/css/why-register.scss";

const WhyRegister = () => {
  return (
    <>
      <div className="prov-services_conatiner-1 why-register-wrap">
        <div className="row inner-container">
          <div className="col-md-7 content-wrap">
            <div className="col-cst-est">
              <img src={Are_You} className="Are_You" />
            </div>
          </div>
          <div Class="col-md-5 form-wrap">
            <div className="img-container">
              <form className="form-getstart">
                <h1 className="Heading">Get started</h1>
                <a className="Headingsub">
                  Alredy have account?{" "}
                  <e style={{ color: "#3DC9A1" }}>sign in</e>
                </a>
                <div>
                  <lable className="lableclass">Name</lable>
                  <br />
                  <input
                    className="Inputclass"
                    type="text"
                    placeholder="Enter your name"
                  ></input>
                </div>
                <br />
                <div>
                  <lable className="lableclass">Email Address</lable>
                  <br />
                  <input
                    className="Inputclass"
                    type="email"
                    placeholder="email@domaim.com"
                  />
                </div>
                <br />
                <div>
                  <lable className="lableclass">Password </lable>
                  <br />
                  <input className="Inputclass" type="password" />
                  <img className="eye" src={eye} />
                </div>
                <br />
                <a className="f-pasword">forgot Password ?</a>

                <button className="Sign-button">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default WhyRegister;
