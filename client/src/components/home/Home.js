import React from "react";
import About from "../articles/About";
import Banner from "../articles/Banner";
import CountUp from "../articles/CountUp";
import ProjectPage from "../articles/ProjectPage";
import ContactPage from "../articles/ContactForm";
import Map from "../articles/Map";
import CommitteePage from "../articles/Commitee";
import Committee from "../articles/CommiteePage";

const Home = () => {
  return (
    <div>
      <Banner />
      {/* <Committee /> */}
      <About />
      <CountUp />
      <ProjectPage />
      <ContactPage />
      <Map />
    </div>
  );
};

export default Home;
