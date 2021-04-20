import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Sidebar.css";
import {
  faCog,
  faHome,
  faGripHorizontal,
  faUserPlus,
  faPlus,
  faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, [loggedInUser.email]);

  return (
    <div className="col-md-3">
      <ul className="dashboard-sidebar">
        <li>
          <Link to="/dashboard">
            <FontAwesomeIcon className="icon" icon={faGripHorizontal} />{" "}
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <FontAwesomeIcon className="icon" icon={faHome} /> <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/review">
            <FontAwesomeIcon className="icon" icon={faPencilAlt} />{" "}
            <span>Review</span>
          </Link>
        </li>
        {isAdmin && (
          <div>
            <li>
              <Link to="/services">
                <FontAwesomeIcon className="icon" icon={faPlus} />
                <span>Services</span>
              </Link>
            </li>
            <li>
              <Link to="/addService">
                <FontAwesomeIcon className="icon" icon={faPlus} />
                <span>Add Service</span>
              </Link>
            </li>
            <li>
              <Link to="/addTeamMember">
                <FontAwesomeIcon className="icon" icon={faUserPlus} />
                <span>Add Team Member</span>
              </Link>
            </li>
            <li>
              <Link to="/settings">
                <FontAwesomeIcon className="icon" icon={faCog} />
                <span>Setting</span>
              </Link>
            </li>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
