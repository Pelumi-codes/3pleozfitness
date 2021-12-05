import React from "react";
import Footer from "../components/Footer";
import PlanCaption from "../components/PlanCaption";
import midweek_skills_main from "../components/images/midweek_skills_main.jpg";
import midweek_skills_cover from "../components/images/midweek_skills_cover.jpg";
import MidweekDetails from "../components/MidWeek/MidweekDetails";

const Midweek = () => {
  return (
    <div>
      <PlanCaption
        mainImg={midweek_skills_main}
        coverImg={midweek_skills_cover}
        title="Midweek skills class"
      />
      <MidweekDetails />
      <Footer />
    </div>
  );
};

export default Midweek;
