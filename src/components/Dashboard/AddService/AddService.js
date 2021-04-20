import axios from "axios";
import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./AddService.css";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const [iconUrl, setIconUrl] = useState(null);

  const handleIconUpload = (e) => {
    const iconData = new FormData();
    iconData.set("key", "3b46d3fe0b0fe4e6c8b283625387a28a");
    iconData.append("image", e.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", iconData)
      .then(function (response) {
        setIconUrl(response.data.data.display_url);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const onSubmit = (data) => {
    const formData = {
      serviceName: data.name,
      serviceBudget: data.budget,
      serviceDescription: data.serviceDescription,
      serviceIconUrl: iconUrl,
    };
    const url = `https://mysterious-beach-22515.herokuapp.com/addService`;
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
      <div className="add-service">
        <div className="row">
          <Sidebar></Sidebar>
          <div className="col-md-9">
            <div className="service-content">
              <h2>Add Service</h2>
              <div className="add-service-form">
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-md-6">
                      <p>
                        <label htmlFor="name">Service Name</label>
                        <br />
                        <input {...register("name")} />
                      </p>
                      <p>
                        <label htmlFor="budget">Budget</label>
                        <br />
                        <input {...register("budget")} />
                      </p>
                      <p>
                        <label htmlFor="icon">Service Icon</label>
                        <br />
                        <input type="file" onChange={handleIconUpload} />
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>
                        <label htmlFor="serviceDescription">
                          Service Features
                        </label>
                        <br />
                        <textarea
                          {...register("serviceDescription")}
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

export default AddService;
