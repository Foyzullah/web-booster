import React from "react";
import "./Testimonial.css";

const Testimonial = (props) => {
  const { name, address, comment, photoUrl } = props.review;
  return (
    <div className="col-md-4">
      <div className="single-testimonial">
        <img src={photoUrl} alt="" />
        <p>{comment}</p>
        <h3>
          {name} <span>{address}</span>
        </h3>
      </div>
    </div>
  );
};

export default Testimonial;
