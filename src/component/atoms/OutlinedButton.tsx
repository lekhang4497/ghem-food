import React from "react";
import { Button, ButtonProps } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Constant from "../../constant/Constant";

const useStyles = makeStyles({
  root: {
    color: Constant.COLOR_PRIMARY,
    fontWeight: "bold",
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 12,
    paddingBottom: 12,
    background: Constant.COLOR_PRIMARY_LIGHT,
  },
});

interface OutlinedButtonProps extends ButtonProps {
  component?: any;
  to?: string;
  children?: any;
}

const OutlinedButton = (props: OutlinedButtonProps) => {
  const classes = useStyles();
  const { children } = props;
  return (
    <Button {...props} className={classes.root}>
      {children}
    </Button>
  );
};

export default OutlinedButton;
