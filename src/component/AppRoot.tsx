import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IntroductionSection from "./IntroductionSection";
import MenuPage from "./MenuPage";
import { Box } from "@material-ui/core";
import Constant from "../constant/Constant";

const AppRoot = () => {
  return (
    <Box fontFamily={Constant.FONT_FAMILY_MAIN}>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/about">
            <div>about</div>
          </Route>
          <Route path="/menu">
            <MenuPage />
          </Route>
          <Route path="/">
            <IntroductionSection />
          </Route>
        </Switch>
      </Router>
    </Box>
  );
};

export default AppRoot;
