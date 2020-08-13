import React from "react";
import { Button, ButtonProps } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Constant from "../../constant/Constant";

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
  },
});

interface AppButtonProps extends ButtonProps {
  component?: any;
  to?: string;
  children?: any;
}

const AppButton = (props: AppButtonProps) => {
  const classes = useStyles();
  const { children } = props;
  return (
    <Button {...props} className={classes.root} disableElevation>
      {children}
    </Button>
  );
};

export default AppButton;
