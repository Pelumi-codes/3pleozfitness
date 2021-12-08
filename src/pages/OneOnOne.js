import React from "react";
import Footer from "../components/Footer";
import OneOnOneDetails from "../components/OneOnOne/OneOnOneDetails";
import PlanCaption from "../components/PlanCaption";
import one_on_one_main from "../components/images/one_on_one_main.jpg";
import one_on_one_cover from "../components/images/one_on_one_cover.jpg";

const One_on_One = () => {
  return (
    <div>
      <PlanCaption
        mainImg={one_on_one_main}
        coverImg={one_on_one_cover}
        title="One-on-one coaching"
      />
      <OneOnOneDetails />
      <Footer />
    </div>
  );
};

export default One_on_One;
