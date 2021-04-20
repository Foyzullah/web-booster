import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-section banner-bg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="banner-content-outer">
              <div className="banner-content-inner">
                <h4>
                  Welcome to <span>web booster agency</span>
                </h4>
                <h2>
                  We help you <span>to grow your business</span>{" "}
                </h2>
                <button className="btn btn-primary">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
