import React from "react";
import { Button, ButtonProps } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Constant from "../../constant/Constant";
import {grey, orange} from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    color: orange[400],
    fontWeight: "bold",
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 12,
    paddingBottom: 12,
    // background: grey[100],
    border: `1px solid ${grey[300]}`,
    "&:hover": {
      backgroundColor: Constant.COLOR_PRIMARY_LIGHT_TRANS,
      borderColor: orange[400]

    },
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
