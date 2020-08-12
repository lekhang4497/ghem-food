import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import { Box } from "@material-ui/core";
import Constant from "../constant/Constant";

const AppRoot = () => {
  return (
    <Box fontFamily={Constant.FONT_FAMILY_MAIN}>
      <Router>
        <Switch>
          <Route path="/about">
            <div>about</div>
          </Route>
          <Route path="/menu">
            <MenuPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </Box>
  );
};

export default AppRoot;
