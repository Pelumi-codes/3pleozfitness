import React from "react";
import Aim from "../components/Aim";
import Plan from "../components/Plan";
import Customers from "../components/Customers";
import Address from "../components/Address";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Landing = () => {
  return (
    <div>
      <Header />
      <Aim />
      <Plan />
      <Customers />
      <Address />
      <Footer />
    </div>
  );
};

export default Landing;
