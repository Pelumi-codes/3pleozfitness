import React from "react";
import Landing from "./pages/Landing";
import About_Us from "./pages/About_Us";
import Camps_And_Picnic from "./pages/Camps_And_Picnic";
import One_on_One from "./pages/One_on_One";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/One-on-One" component={One_on_One} />
          <Route path="/About-Us" component={About_Us} />
          <Route path="/Camps-And-Picnic" component={Camps_And_Picnic} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
