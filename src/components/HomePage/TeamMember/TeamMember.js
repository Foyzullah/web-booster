import React from "react";
import "./TeamMember.css";

const TeamMember = (props) => {
  const { name, title, photoUrl, email, aboutMember } = props.teamMember;
  return (
    <div className="col-md-4">
      <div className="single-teamMember">
        <img src={photoUrl} alt="" />
        <h3>
          {name} <span>{title}</span>
        </h3>
        <p>{aboutMember}</p>
      </div>
    </div>
  );
};

export default TeamMember;
