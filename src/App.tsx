import React from "react";
import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Constant from "./constant/Constant";
import AppRoot from "./component/AppRoot";

const theme = createMuiTheme({
  typography: {
    fontFamily: ['"Open Sans"'].join(","),
    button: {
      textTransform: "none",
      fontWeight: 700
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
    <ThemeProvider theme={theme}>
      <AppRoot />
    </ThemeProvider>
  </div>
);

export default App;
