import React from "react";
import "./AboutUs.css";
import aboutImage from "../../../img/aboutUs.jpg";

const AboutUs = () => {
  return (
    <div className="about-us-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="title">Who we are?</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="about-us-img">
              <img src={aboutImage} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-content">
              <h3 className="heading">About us</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
                cum non, earum repellat, nemo dolorum aspernatur praesentium
                iusto vitae reiciendis quod suscipit corporis unde nostrum quas.
                Soluta error enim, cum, reiciendis ab mollitia quidem rerum
                tenetur recusandae non nam ipsam minima deserunt maxime
                excepturi aut, dolorum sit! Enim, qui sit!
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque,
                ratione ipsam quasi ad at commodi molestiae illo aperiam
                perspiciatis. Eveniet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
