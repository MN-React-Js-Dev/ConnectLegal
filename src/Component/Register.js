import React from "react";
import "../assets/css/register.scss";
import img1 from "../assets/images/Ellipse1.png";
import img2 from "../assets/images/Ellipse2.png";
import img3 from "../assets/images/Ellipse3.png";
import img4 from "../assets/images/Vector -img.png";

const ProServicesContainer = () => {
  return (
    <section className=" why-register-upper-wrap">
      <div Class="container maincontainer-data">
        <div Class="row innercontainer-data">
          <div Class="col-md-6 left-container-data">
            <div className="why-formate">
              <h1 className="why-heading">Why Register?</h1>
              <p className="why-subheading">
                Keep the history of all your chats, questions and callback
                requests. Adding a lorem ipsum here.
              </p>
              <img className="register-logo-data3" src={img4} />
            </div>
          </div>
          <div Class="col-md-6 right-container-data">
            <div className="img-container">
              <div className="inner-wrap">
                <div className="img">
                  <img className="" src={img1} />
                </div>
                <span className="why-subheading">
                  Keep the history of all your chats, questions and callback
                  requests
                </span>
              </div>
              <div className="inner-wrap">
                <div className="img">
                  <img className="" src={img2} />
                </div>
                <span className="why-subheading">
                  Track your interactions with lawyers and receive notifications
                </span>
              </div>
              <div className="inner-wrap">
                <div className="img">
                  <img className="" src={img3} />
                </div>
                <span className="why-subheading">
                  Ask lawyers follow-up questions if something is not clear from
                  their answers
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProServicesContainer;
