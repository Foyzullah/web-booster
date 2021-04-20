import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneVolume,
  faEnvelope,
  faMapMarkedAlt,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import "./GetInTouch.css";

const GetInTouch = () => {
  return (
    <div className="get-in-touch">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="title">Get In Touch</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="contact-info">
              <p className="single-element">
                <FontAwesomeIcon
                  className="icon-position"
                  icon={faPhoneVolume}
                />{" "}
                +00000000000000232323
              </p>
              <p className="single-element">
                <FontAwesomeIcon className="icon-position" icon={faEnvelope} />{" "}
                support@email.com
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <p className="single-element">
              <FontAwesomeIcon
                className="icon-position"
                icon={faMapMarkedAlt}
              />{" "}
              Brookyln, New York
            </p>
            <p className="single-element">
              <FontAwesomeIcon className="icon-position" icon={faGlobe} />
              http://www.webboosteragency.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
