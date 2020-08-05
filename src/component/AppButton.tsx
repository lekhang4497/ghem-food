import React from "react";
import {Button, ButtonProps} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Constant from "../constant/Constant";

const useStyles = makeStyles({
  root: {
    background: `linear-gradient(45deg, ${Constant.BUTTON_GRADIENT_START}, ${Constant.BUTTON_GRADIENT_END})`,
    border: 0,
    color: "white",
    fontWeight: "bold",
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 12,
    paddingBottom: 12,
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    textTransform: "none",
  },
});

const AppButton = ({children}: any) => {
  const classes = useStyles();
  return (
    <Button className={classes.root}>
      {children}
    </Button>
  );
};

export default AppButton;
