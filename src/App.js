import React from "react";
import Landing from "./pages/Landing";
import About_Us from "./pages/About_Us";
import Camps_And_Picnic from "./pages/Camps_And_Picnic";
import One_on_One from "./pages/One_on_One";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Plan from "./components/Plan";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <div>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/one-on-one" component={One_on_One} />
          <Route path="/About-Us" component={About_Us} />
          <Route path="/camps-and-clinic" component={Camps_And_Picnic} />
          <Route path="/plan" component={Plan} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
