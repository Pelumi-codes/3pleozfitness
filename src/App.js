import React, { Suspense } from "react";
import { lazy } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";

const Landing = lazy(() => import("./pages/Landing"));
const CampsAndClinics = lazy(() => import("./pages/CampsAndClinics"));
const OneOnOne = lazy(() => import("./pages/OneOnOne"));
const Midweek = lazy(() => import("./pages/Midweek"));

function App() {
  return (
    <Router>
      <div>
        <ScrollToTop />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/one-on-one" component={OneOnOne} />
            <Route path="/midweek-skills" component={Midweek} />
            <Route path="/camps-and-clinics" component={CampsAndClinics} />

            {/* No match */}
            <Route component={() => <Redirect to="/" />} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
