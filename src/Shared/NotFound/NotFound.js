import React from "react";
import sleeping from "../../images/404.jpg";

const NotFound = () => {
  return (
    <div>
      <h2 className="text-primary text-center">Mechanic Is Sleeping</h2>
      <img className="img-fluid" src={sleeping} alt="" />
    </div>
  );
};

export default NotFound;
