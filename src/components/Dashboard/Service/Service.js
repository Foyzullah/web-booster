import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Service = ({ service }) => {
  console.log(service);
  const { _id, serviceName, serviceBudget, serviceIconUrl } = service;

  const handleDelete = (id) => {
    fetch(`https://mysterious-beach-22515.herokuapp.com/deleteService/${id}`, {
      method: "DELETE",
    });
  };
  return (
    <tr>
      <td>
        <img src={serviceIconUrl} alt="" />
      </td>
      <td>{serviceName}</td>
      <td>{serviceBudget}</td>
      <td>
        <FontAwesomeIcon
          className="cursor"
          onClick={() => handleDelete(_id)}
          icon={faTrashAlt}
        />
      </td>
    </tr>
  );
};

export default Service;
