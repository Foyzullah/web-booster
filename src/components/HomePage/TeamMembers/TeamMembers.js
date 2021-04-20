import React, { useEffect, useState } from "react";
import TeamMember from "../TeamMember/TeamMember";
import "./TeamMembers.css";

const TeamMembers = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  useEffect(() => {
    fetch(`https://mysterious-beach-22515.herokuapp.com/teamMembers`)
      .then((res) => res.json())
      .then((data) => setTeamMembers(data));
  }, []);
  return (
    <div className="team-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="title">Our Team Members</h3>
          </div>
        </div>
        <div className="row">
          {teamMembers &&
            teamMembers.map((teamMember) => (
              <TeamMember
                teamMember={teamMember}
                key={teamMember._id}
              ></TeamMember>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
