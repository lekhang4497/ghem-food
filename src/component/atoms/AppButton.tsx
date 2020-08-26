import React from "react";
import { Button, ButtonProps } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    // background: `linear-gradient(45deg, ${Constant.BUTTON_GRADIENT_START}, ${Constant.BUTTON_GRADIENT_END})`,
    // backgroundColor: orange[400],
    // border: 0,
    color: "white",
    fontWeight: 700,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 12,
    paddingBottom: 12,
    "&:hover": {
      backgroundColor: orange[600],
      // borderColor: orange[400]
    },
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
    <Button
      {...props}
      className={classes.root}
      variant="contained"
      color="primary"
      disableElevation
    >
      {children}
    </Button>
  );
};

export default AppButton;
