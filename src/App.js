import React from "react";
import Landing from "./pages/Landing";
import CampsAndClinics from "./pages/CampsAndClinics";
import OneOnOne from "./pages/OneOnOne";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Midweek from "./pages/Midweek";

function App() {
  return (
    <Router>
      <div>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/one-on-one" component={OneOnOne} />
          <Route path="/midweek-skills" component={Midweek} />
          <Route path="/camps-and-clinics" component={CampsAndClinics} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
