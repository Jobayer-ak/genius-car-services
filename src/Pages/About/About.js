import React from "react";
// import { Helmet } from "react-helmet-async";
import Direction from "../../Map/Direction/Direction";
import MyLocation from "../../Map/MyLocation/MyLocation";
// import MyLocation from "../../Map/MyLocation/MyLocation";
import PageTitle from "../../Shared/PageTitle/PageTitle";

const About = () => {
  return (
    <div>
      <PageTitle title="About"></PageTitle>
      <h2>This is About us</h2>
      <Direction></Direction>
      {/* <MyLocation></MyLocation> */}
    </div>
  );
};

export default About;
