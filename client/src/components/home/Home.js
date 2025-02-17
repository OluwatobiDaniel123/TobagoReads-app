import React from "react";
import About from "../articles/About";
import Banner from "../articles/Banner";
import CountUp from "../articles/CountUp";
import ProjectPage from "../articles/ProjectPage";
import ContactPage from "../articles/ContactForm";
import Map from "../articles/Map";
import Fundraising from "../articles/Fundraising";

const Home = () => {
  return (
    <div>
      <Banner />
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
