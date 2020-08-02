import React from "react";
import "./App.css";
import IntroductionSection from "./component/IntroductionSection";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Constant from "./constant/Constant";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Open Sans"].join(","),
    button: {
      textTransform: "none"
    }
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
      <IntroductionSection />
    </ThemeProvider>
  </div>
);

export default App;
