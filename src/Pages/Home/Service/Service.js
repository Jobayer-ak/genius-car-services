import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, img, description, price } = service;
  const navigate = useNavigate();
  const navigateToServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };

  return (
    <div className="service">
      <img src={img} className="w-100" alt="" />
      <h4>This is Service: {name}</h4>
      <p>Price: {price}</p>
      <p>{description}</p>
      <button
        onClick={() => navigateToServiceDetail(id)}
        className="btn btn-primary">
        Book: {name}
      </button>
    </div>
  );
};

export default Service;
