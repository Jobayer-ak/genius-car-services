import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";
// import repair1 from "../../../images/repair-1.png";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://dry-fjord-85963.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div id="services" className="container">
      <div className="row">
        <h1 className="text-primary text-center  my-5">Our Services</h1>
        <div className="services-container">
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
