import React from "react";

const Order = ({ order }) => {
  const { _id, serviceName, email, orderDate, serviceBudget } = order;

  const handleOnChange = (id) => {
    console.log("Changed", id);
  };

  return (
    <tr>
      <td>{serviceName}</td>
      <td>{email}</td>
      <td>{orderDate}</td>
      <td>{serviceBudget}</td>
      <td>
        <form action="">
          <select onChange={() => handleOnChange(_id)} name="orderStatus" id="">
            <option value="pending">pending</option>
            <option value="onGoing">on going</option>
            <option value="done">done</option>
          </select>
        </form>
      </td>
    </tr>
  );
};

export default Order;
