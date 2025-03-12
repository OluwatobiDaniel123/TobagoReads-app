import React from "react";
import About from "../articles/About";
import Banner2 from "../articles/Banner2";
import CountUp from "../articles/CountUp";
import ProjectPage from "../articles/ProjectPage";
import ContactPage from "../articles/ContactForm";
import Map from "../articles/Map";
import Fundraising from "../articles/Fundraising";

const Home = () => {
  return (
    <div>
      <Banner2 />
      <About />
      <CountUp />
      <ProjectPage />
      <Fundraising />
      <ContactPage />
      <Map />
    </div>
  );
};

export default Home;
