/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Footer from "../components/Footer";
import One_One from "../components/One_on_one/One_One";
import NavBar from "../components/NavBar";
import One_One_Caption from "../components/One_on_one/One_One_Caption";

const One_on_One = () => {
  return (
    <div>
      <NavBar />
      <One_One_Caption />
      <One_One />
      <Footer />
    </div>
  );
};

export default One_on_One;
