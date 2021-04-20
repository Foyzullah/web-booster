import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import "./Navbar.css";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <div className="header-top">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="logo">
              <h3>Web Booster agency</h3>
            </div>
          </div>
          <div className="col-md-8 text-right">
            <div className="navmenu">
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  {loggedInUser.email ? (
                    loggedInUser.name
                  ) : (
                    <Link to="/login">Login</Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
