import React from "react";
import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Constant from "./constant/Constant";
import AppRoot from "./component/AppRoot";
import ReactGA from 'react-ga';
import {Auth0Provider} from "@auth0/auth0-react";
ReactGA.initialize('UA-175557450-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const theme = createMuiTheme({
  typography: {
    fontFamily: ['"Open Sans"'].join(","),
    button: {
      textTransform: "none",
      fontWeight: 700,
    },
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: Constant.COLOR_PRIMARY,
    },
    secondary: {
      main: "#66bb6a",
    },
  },
});

const App = () => (
  <div className="App">
    <Auth0Provider
      domain="lekhang.us.auth0.com"
      clientId="MXkdYhSHIvgm5gEzeAOscqwOYxDyp9DE"
      redirectUri={window.location.origin}
    >

    <ThemeProvider theme={theme}>
      <AppRoot />
    </ThemeProvider>
    </Auth0Provider>
  </div>
);

export default App;
