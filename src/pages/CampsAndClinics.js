import React from "react";
import Footer from "../components/Footer";
import camps_and_clinics_main from "../components/images/camps_and_clinics_main.jpg";
import camps_and_clinics_cover from "../components/images/camps_and_clinics_cover.jpg";
import PlanCaption from "../components/PlanCaption";
import CampsAndClinicsDetails from "../components/Camps/CampsAndClinicsDetails";

const CamppsAndClinics = () => {
  return (
    <div>
      <PlanCaption
        coverImg={camps_and_clinics_cover}
        mainImg={camps_and_clinics_main}
        title="Camps and clinics"
      />
      <CampsAndClinicsDetails />
      <Footer />
    </div>
  );
};

export default CamppsAndClinics;
