import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Service = ({ service }) => {
  console.log(service);
  const { _id, serviceName, serviceBudget, serviceIconUrl } = service;

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/deleteService/${id}`, {
      method: "DELETE",
    });
  };
  return (
    <tr>
      <td>{serviceIconUrl}</td>
      <td>{serviceName}</td>
      <td>{serviceBudget}</td>
      <td>
        <FontAwesomeIcon onClick={() => handleDelete(_id)} icon={faTrashAlt} />
      </td>
    </tr>
  );
};

export default Service;
