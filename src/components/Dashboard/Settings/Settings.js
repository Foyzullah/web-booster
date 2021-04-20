import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Settings.css";
import { useForm } from "react-hook-form";
import axios from "axios";

const Settings = () => {
  const { register, handleSubmit, reset } = useForm();
  const [photoUrl, setPhotoUrl] = useState([]);
  const handlePhotoUpload = (e) => {
    const photoData = new FormData();
    photoData.set("key", "3b46d3fe0b0fe4e6c8b283625387a28a");
    photoData.append("image", e.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", photoData)
      .then((response) => {
        setPhotoUrl(response.data.data.display_url);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  const onSubmit = (data) => {
    const formData = {
      name: data.name,
      email: data.email,
      role: data.role,
      photoUrl: photoUrl,
    };
    const url = `http://localhost:5000/addManageRole`;
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json " },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    reset();
  };

  return (
    <div className="container-fluid">
      <div className="settings">
        <div className="row">
          <Sidebar />
          <div className="col-md-9">
            <div className="settings-content">
              <h2>Settings</h2>
              <div className="role-form">
                <h4>Add Manage Role</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-md-6">
                      <p>
                        <label htmlFor="name">Name</label>
                        <br />
                        <input type="text" {...register("name")} />
                      </p>
                      <p>
                        <label htmlFor="email">Email</label>
                        <br />
                        <input type="email" {...register("email")} />
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>
                        <label htmlFor="roal">Manage Role</label>
                        <br />
                        <select {...register("role")}>
                          <option value="admin">admin</option>
                          <option value="moderator">moderator</option>
                        </select>
                      </p>
                      <p>
                        <label htmlFor="photo">Photo</label>
                        <br />
                        <input type="file" onChange={handlePhotoUpload} />
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

export default Settings;
