import React from "react";
import Footer from "../components/Footer";
import Camps from "../components/Camps/Camps";
import NavBar from "../components/NavBar";
import Camps_Caption from "../components/Camps/Camps_Caption";

const Camps_And_Picnic = () => {
  return (
    <div>
      <NavBar />
      <Camps_Caption />
      <Camps />
      <Footer />
    </div>
  );
};

export default Camps_And_Picnic;
