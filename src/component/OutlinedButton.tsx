import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Constant from "../constant/Constant";
import orange from "@material-ui/core/colors/orange";

const useStyles = makeStyles({
  root: {
    borderColor: orange[100],
    borderWidth: 1,
    borderStyle: "solid",
    color: Constant.COLOR_PRIMARY,
    fontWeight: "bold",
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 12,
    paddingBottom: 12,
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    textTransform: "none",
  },
  outlined: {},
});

const OutlinedButton = ({ children }: any) => {
  const classes = useStyles();
  return <Button className={classes.root}>{children}</Button>;
};

export default OutlinedButton;
