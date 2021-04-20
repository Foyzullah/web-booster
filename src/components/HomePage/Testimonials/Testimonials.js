import React, { useEffect, useState } from "react";
import Testimonial from "../Testimonial/Testimonial";
import "./Testimonials.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://mysterious-beach-22515.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((reviews) => {
        setReviews(reviews);
      });
  }, []);
  return (
    <div className="testimonial-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="title">What's our client says </h3>
          </div>
        </div>
        <div className="row">
          {reviews &&
            reviews.map((review) => (
              <Testimonial review={review} key={review._id}></Testimonial>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
