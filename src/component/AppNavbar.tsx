import { Container, Link } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Constant from "../constant/Constant";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  menuItem: {
    fontWeight: "bold",
    color: Constant.TEXT_SECONDARY,
    "&:hover": {
      color: Constant.TEXT_DARK,
      textDecoration: "none",
    },
  },
});

const AppNav = () => {
  const classes = useStyles();
  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();
  return (
    <Container maxWidth="md">
      <Box py={2} fontFamily={Constant.FONT_FAMILY_MAIN}>
        <Grid container justify="flex-end">
          <Grid item md={6} container justify="flex-start">
            <img src={process.env.PUBLIC_URL + "/img/logo.png"} width={180} />
          </Grid>
          <Grid item md={6} container alignItems="center">
            {/* Menu items*/}
            <Grid container spacing={6} justify="flex-end">
              <Grid item>
                <Link
                  className={classes.menuItem}
                  href="#"
                  onClick={preventDefault}
                >
                  Home
                </Link>
              </Grid>
              <Grid item>
                <Link
                  className={classes.menuItem}
                  href="#"
                  onClick={preventDefault}
                >
                  Menu
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AppNav;
