import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IntroductionSection from "./IntroductionSection";

const AppRoot = () => {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <div>about</div>
        </Route>
        <Route path="/users">
          <div>users</div>
        </Route>
        <Route path="/">
          <IntroductionSection />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRoot;
