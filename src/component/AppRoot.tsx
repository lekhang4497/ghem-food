import React, { FC } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  RouteProps,
  Switch,
} from "react-router-dom";
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
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import AdminPage from "./pages/admin/AdminPage";
import {Auth0Provider, useAuth0} from "@auth0/auth0-react";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import {green} from "@material-ui/core/colors";
import BookingResultPage from "./pages/BookingResultPage";

// eslint-disable-next-line react/prop-types
export const PrivateRoute: FC<RouteProps> = ({ children, ...rest }) => {
  const { isAuthenticated, isLoading } = useAuth0();
  return (
    <Route
      {...rest}
      render={() => {
        if (isAuthenticated) {
          return children;
        } else if (isLoading) {
          return <div>Loading...</div>;
        } else
          return (
            <Redirect
              to={{
                pathname: "/admin/login",
              }}
            />
          );
      }}
    />
  );
};

const adminTheme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: green[600],
    },
  },
})

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
            <Route path="/delivery-result/:deliveryId">
              <DeliveryResultPage />
            </Route>
            <Route path="/booking-result/:bookingId">
              <BookingResultPage />
            </Route>
            <Route path="/admin/login">
              <AdminLoginPage />
            </Route>
            <PrivateRoute path="/admin">
              <ThemeProvider theme={adminTheme}>
              <AdminPage />
              </ThemeProvider>
            </PrivateRoute>
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
