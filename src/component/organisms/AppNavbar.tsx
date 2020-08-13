import { Container, Link } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Constant from "../../constant/Constant";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";

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

const menu = [
  {
    name: "Trang chủ",
    to: "/",
  },
  {
    name: "Thực đơn",
    to: "/menu",
  },
  {
    name: "Combo",
    to: "/combo",
  },
  {
    name: "Đặt bàn",
    to: "/booking",
  },
];

const AppNav = () => {
  const classes = useStyles();
  return (
    <Box>
      <Container maxWidth="md">
        <Box py={2} fontFamily={Constant.FONT_FAMILY_MAIN}>
          <Grid container justify="flex-end">
            <Grid item md={6} container justify="flex-start">
              <Link component={RouterLink} to="/">
                <img
                  src={process.env.PUBLIC_URL + "/img/logo.png"}
                  width={180}
                  alt="Ghem's logo"
                />
              </Link>
            </Grid>
            <Grid item md={6} container alignItems="center">
              {/* Menu items*/}
              <Grid container spacing={4} justify="flex-end">
                {menu.map((item) => (
                  <Grid item key={item.name}>
                    <Link
                      className={classes.menuItem}
                      component={RouterLink}
                      to={item.to}
                    >
                      {item.name}
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AppNav;
