import React, { useState } from "react";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";
import "./Review.css";
import { useForm } from "react-hook-form";

const Review = () => {
  const { register, handleSubmit, reset } = useForm();
  const [photoUrl, setPhotoUrl] = useState(null);

  const handlePhotoUpload = (e) => {
    const imageData = new FormData();
    imageData.set("key", "3b46d3fe0b0fe4e6c8b283625387a28a");
    imageData.append("image", e.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setPhotoUrl(response.data.data.display_url);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  const onSubmit = (data) => {
    const formData = {
      name: data.name,
      address: data.address,
      comment: data.comment,
      photoUrl: photoUrl,
    };
    const url = `http://localhost:5000/review`;
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    reset();
  };
  return (
    <div className="container-fluid">
      <div className="review">
        <div className="row">
          <Sidebar />
          <div className="col-md-9">
            <div className="review-content">
              <h2>Review</h2>
              <div className="review-form">
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="name">Name</label>
                      <input {...register("name")} />
                      <label htmlFor="address">Address</label>
                      <input {...register("address")} />
                      <label htmlFor="photo">Photo</label>
                      <br />
                      <input type="file" onChange={handlePhotoUpload} />
                    </div>
                    <div className="col-md-6">
                      <p>
                        <label htmlFor="comment">Comment</label>
                        <br />
                        <textarea
                          {...register("comment")}
                          cols="30"
                          rows="10"
                        ></textarea>
                      </p>
                    </div>
                  </div>
                  <input type="submit" value="Save" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
