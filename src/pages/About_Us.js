import React from "react";
import Footer from "../components/Footer";
import About from "../components/MidWeek/About";
import About_Caption from "../components/MidWeek/About_Caption";
import NavBar from "../components/NavBar";

const About_Us = () => {
  return (
    <div>
      <NavBar />
      <About_Caption />
      <About />
      <Footer />
    </div>
  );
};

export default About_Us;
