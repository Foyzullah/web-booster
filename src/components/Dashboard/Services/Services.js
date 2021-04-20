import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import Sidebar from "../Sidebar/Sidebar";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://mysterious-beach-22515.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container-fluid">
      <div className="services">
        <div className="row">
          <Sidebar />
          <div className="col-md-9">
            <div className="services-content">
              <h2>Services</h2>
              <div className="service-table">
                <table>
                  <thead>
                    <tr>
                      <td>Service Icon</td>
                      <td>Service Name</td>
                      <td>Service Budget</td>
                      <td>Action</td>
                    </tr>
                  </thead>
                  <tbody>
                    {services &&
                      services.map((service) => (
                        <Service service={service} key={service._id}></Service>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
