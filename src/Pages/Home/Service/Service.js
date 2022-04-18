import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { name, img, description, price } = service;

  return (
    <div className="service">
      <img src={img} className="w-100" alt="" />
      <h4>This is Service: {name}</h4>
      <p>Price: {price}</p>
      <p>{description}</p>
      <button className="btn btn-primary">Book: {name}</button>
    </div>
  );
};

export default Service;
