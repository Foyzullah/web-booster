import React, { useContext, useEffect, useState } from "react";
import "./Dashboard.css";
import Sidebar from "../Sidebar/Sidebar";
import Order from "../Order/Order";
import { UserContext } from "../../../App";

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=` + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [loggedInUser.email]);
  return (
    <div className="container-fluid">
      <div className="dashboard">
        <div className="row">
          <Sidebar />
          <div className="col-md-9">
            <div className="dashboard-content">
              <h2>Dashboard</h2>

              <div className="orders-table">
                <table>
                  <thead>
                    <tr>
                      <td>Service Name</td>
                      <td>Email</td>
                      <td>Order Date</td>
                      <td>Budget</td>
                      <td>Order Status</td>
                    </tr>
                  </thead>
                  <tbody>
                    {orders &&
                      orders.map((order) => (
                        <Order order={order} key={order._id}></Order>
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

export default Dashboard;
