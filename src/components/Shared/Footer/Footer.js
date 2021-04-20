import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import cardImg from "../../../img/payment.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="single-footer-item">
              <div className="logo">
                <h3>Web booster agency</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="single-footer-item">
              <h3>Social Links</h3>
              <ul className="social-links">
                <li className="icon-padding">
                  <Link to="https://facebook.com">
                    {" "}
                    <FontAwesomeIcon
                      className="position-abs"
                      icon={faArrowRight}
                    />{" "}
                    Facebook
                  </Link>
                </li>
                <li className="icon-padding">
                  <Link to="https://twitter.com">
                    <FontAwesomeIcon
                      className="position-abs"
                      icon={faArrowRight}
                    />
                    Twitter
                  </Link>
                </li>
                <li className="icon-padding">
                  <Link to="https://instagram.com">
                    {" "}
                    <FontAwesomeIcon
                      className="position-abs"
                      icon={faArrowRight}
                    />
                    instagram
                  </Link>
                </li>
                <li className="icon-padding">
                  <Link to="https://linkedin.com">
                    {" "}
                    <FontAwesomeIcon
                      className="position-abs"
                      icon={faArrowRight}
                    />
                    Linkedin
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="single-footer-item">
              <h3>Payment Method</h3>
              <img src={cardImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
