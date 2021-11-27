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
// import Aim from "./components/Aim";
import Plan from "./components/Plan";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/One-on-One" component={One_on_One} />
          <Route path="/About-Us" component={About_Us} />
          <Route path="/Camps-And-Picnic" component={Camps_And_Picnic} />
          <Redirect exact from="/" to="/aim" />
          {/* <Route path="/aim" component={Aim} /> */}
          <Route path="/plan" component={Plan} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
