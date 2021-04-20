import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../Shared/Navbar/Navbar";
import "./PlaceOrder.css";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import ProcessPayment from "../ProcessPayment/ProcessPayment";

const PlaceOrder = () => {
  const { id } = useParams();
  const [service, setService] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [orderStatus, setOrderStatus] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [shippingData, setShippingData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/service/${id}`)
      .then((res) => res.json())
      .then((service) => {
        setService(service);
      });
  }, [id]);

  const onSubmit = (data) => {
    setShippingData(data);
  };

  const handlePaymentSuccess = (paymentId) => {
    const orderDate = new Date().toDateString("MM/dd/yyy");
    const orderDetails = {
      ...loggedInUser,
      shipment: shippingData,
      paymentId,
      orderDate,
      orderStatus: orderStatus,
      ...service,
    };
    const url = `http://localhost:5000/addOrder`;
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderDetails),
    });
  };

  const { serviceName, serviceBudget } = service;
  delete service._id;
  return (
    <div className="container">
      <Navbar />
      <div className="place-order">
        <div className="row">
          <div className="col-md-6">
            <div style={{ display: shippingData ? "none" : "block" }}>
              <div className="shipment-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <p>
                    <label htmlFor="name">Name</label>
                    <br />
                    <input
                      defaultValue={loggedInUser.name}
                      {...register("name", { required: true })}
                      placeholder="Your Name"
                    />
                    {errors.name && <span>This field is required</span>}
                  </p>
                  <p>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input
                      defaultValue={loggedInUser.email}
                      {...register("email", { required: true })}
                      placeholder="Your Email"
                    />
                    {errors.email && <span>This field is required</span>}
                  </p>

                  <p>
                    <label htmlFor="address">Address</label>
                    <br />
                    <input
                      {...register("address", { required: true })}
                      placeholder="Your Address"
                    />
                    {errors.address && <span>This field is required</span>}
                  </p>
                  <p>
                    <label htmlFor="phone">Phone</label>
                    <br />
                    <input
                      {...register("phone", { required: true })}
                      placeholder="Your Phone"
                    />
                    {errors.phone && <span>This field is required</span>}
                  </p>
                  <input type="submit" value="Go to Payment" />
                </form>
              </div>
            </div>
            <div style={{ display: shippingData ? "block" : "none" }}>
              <h2>Please Pay for me</h2>
              <ProcessPayment
                handlePayment={handlePaymentSuccess}
              ></ProcessPayment>
            </div>
          </div>

          <div className="col-md-6">
            <h2>Order Summery</h2>
            <table>
              <thead>
                <tr>
                  <th>Service Name</th>
                  <th>Budget</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{serviceName}</td>
                  <td>{serviceBudget}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
