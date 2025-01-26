import React from "react";
import About from "../articles/About";
import Banner from "../articles/Banner";
import CountUp from "../articles/CountUp";
import ProjectPage from "../articles/ProjectPage";
import ContactPage from "../articles/ContactForm";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <CountUp />
      <ProjectPage />
      <ContactPage />
    </div>
  );
};

export default Home;
