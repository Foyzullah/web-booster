import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useForm } from "react-hook-form";
import "./AddTeamMember.css";
import axios from "axios";

const AddTeamMember = () => {
  const { register, handleSubmit, reset } = useForm();

  const [imageUrl, setImageUrl] = useState([]);

  const handleImageUpload = (e) => {
    const imageData = new FormData();
    imageData.set("key", "3b46d3fe0b0fe4e6c8b283625387a28a");
    imageData.append("image", e.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((response) => {
        setImageUrl(response.data.data.display_url);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const onSubmit = (data) => {
    const formData = {
      name: data.name,
      email: data.email,
      title: data.title,
      aboutMember: data.aboutMember,
      photoUrl: imageUrl,
    };
    const url = `http://localhost:5000/addTeamMember`;
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
      <div className="add-teamMember">
        <div className="row">
          <Sidebar></Sidebar>
          <div className="col-md-9">
            <div className="temMember-content">
              <h2>Add Team Member</h2>
              <div className="teamMember-form">
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-md-6">
                      <p>
                        <label htmlFor="name">Name</label>
                        <br />
                        <input {...register("name")} />
                      </p>
                      <p>
                        <label htmlFor="budget">Title</label>
                        <br />
                        <input {...register("title")} />
                      </p>
                      <p>
                        <label htmlFor="email">Email</label>
                        <br />
                        <input type="email" {...register("email")} id="" />
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>
                        <label htmlFor="photoz">Photo</label>
                        <br />
                        <input type="file" onChange={handleImageUpload} />
                      </p>
                      <p>
                        <label htmlFor="aboutMember">About Member</label>
                        <br />
                        <textarea
                          {...register("aboutMember")}
                          cols="30"
                          rows="5"
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

export default AddTeamMember;
