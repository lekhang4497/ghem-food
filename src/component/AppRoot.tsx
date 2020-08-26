import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import { Box } from "@material-ui/core";
import Constant from "../constant/Constant";
import BookingPage from "./pages/BookingPage";
import ComboPage from "./pages/ComboPage";
import ScrollToTop from "./ScrollToTop";

const AppRoot = () => {
  return (
    <Box fontFamily={Constant.FONT_FAMILY_MAIN}>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/about">
            <div>about</div>
          </Route>
          <Route path="/menu">
            <MenuPage />
          </Route>
          <Route path="/combo">
            <ComboPage />
          </Route>
          <Route path="/booking">
            <BookingPage />
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
