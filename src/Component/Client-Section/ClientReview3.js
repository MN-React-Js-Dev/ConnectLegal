import React from "react";
import "../../assets/css/clientreview.css";
import clientimg1 from "../../assets/images/group-76.png";
import { FaStar } from "react-icons/fa";

const ClientReview3 = () => {
  return (
    <div className="client-review-container">
      <div className="client-review">
        <p className="review-msg">
          "We quickly had to get legal counsel, and luckily for us, we found the
          Connect Legal platform. The rapport and guidance was outstanding at
          all times, prompt”.
        </p>
      </div>
      <div className="client-personal">
        <div className="client-name">
          <div className="images-client">
            <img src={clientimg1} alt="client-img" />
          </div>
          <div className="name-client">
            <h5>Liam Brown</h5>
            <p>CEO Company</p>
          </div>
        </div>
        <div className="rating-section">
          <div className="star-rate">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p>Since 2 months</p>
        </div>
      </div>
    </div>
  );
};

export default ClientReview3;
