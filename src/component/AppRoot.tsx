import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import { Box } from "@material-ui/core";
import Constant from "../constant/Constant";
import BookingPage from "./pages/BookingPage";
import ComboPage from "./pages/ComboPage";
import ScrollToTop from "./ScrollToTop";
import { CartProvider } from "../store/CartStore";
import CartPage from "./pages/CartPage";
import DeliveryResultPage from "./pages/DeliveryResultPage";

const AppRoot = () => {
  return (
    <CartProvider>
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
            <Route path="/cart">
              <CartPage />
            </Route>
            <Route path="/delivery-result">
              <DeliveryResultPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </Box>
    </CartProvider>
  );
};

export default AppRoot;
