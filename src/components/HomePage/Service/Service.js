import React from "react";
import { useHistory } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const {
    _id,
    serviceName,
    serviceIconUrl,
    serviceDescription,
  } = props.service;

  const history = useHistory();
  const handleOnClick = (id) => {
    const url = `/placeOrder/${id}`;
    history.push(url);
  };

  return (
    <div className="col-md-4">
      <div className="single-service-item" onClick={() => handleOnClick(_id)}>
        <img src={serviceIconUrl} alt="" />
        <h4>{serviceName}</h4>
        <p>{serviceDescription}</p>
      </div>
    </div>
  );
};

export default Service;
