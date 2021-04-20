import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <div className="service-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="title">What we do for you</h3>
          </div>
        </div>
        <div className="row">
          {services &&
            services.map((service) => (
              <Service service={service} key={service._id}></Service>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
