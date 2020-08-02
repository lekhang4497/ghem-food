import React from "react";
import Grid from "@material-ui/core/Grid";
import { Button, Container, Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Constant from "../constant/Constant";
import ReasonCard from "./ReasonCard";
import FeatureMenu from "./FeatureMenu";

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
    textTransform: "none",
  },
  title: {
    fontFamily: "Open Sans",
    fontWeight: "bold",
    color: Constant.TEXT_DARK,
  },
  titleImg: {
    borderRadius: "50%",
    maxWidth: "100%",
    background:
      'url("http://www.ghemsaigon.com/assets/images/food/1.jpg") 50% 50% no-repeat',
    backgroundSize: "100%",
    width: "100%",
    paddingBottom: "100%",
    backgroundColor: Constant.COLOR_PRIMARY,
  },
  titleImgWrapper: {
    borderColor: Constant.COLOR_PRIMARY_LIGHT,
    borderWidth: 16,
    borderStyle: "solid",
  },
  menuItem: {
    fontWeight: "bold",
    color: "#757575",
    "&:hover": {
      color: "#424242",
      textDecoration: "none",
    },
  },
  coverGradient: {
    background: `linear-gradient(135deg, ${Constant.COLOR_PRIMARY_LIGHT}, #fff, #fff)`,
  },
});

const IntroductionSection = () => {
  const classes = useStyles();
  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();

  return (
    <div>
      <Box className={classes.coverGradient}>
        <Box mb={8}>
          <Container maxWidth="md">
            <Box py={4}>
              <Grid container justify="flex-end">
                <Grid item md={6} container justify="flex-start">
                  {/* Logo */}
                  <Box
                    color={Constant.COLOR_PRIMARY}
                    fontFamily={"Lobster Two"}
                    fontStyle={"italic"}
                    fontWeight={"normal"}
                    fontSize={64}
                  >
                    Ghém
                  </Box>
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
        </Box>

        <Box pb={8}>
          <Container maxWidth="md">
            <Grid container spacing={3}>
              <Grid item md={6}>
                <Box
                  flexDirection="column"
                  justifyContent="center"
                  height="100%"
                  display="flex"
                >
                  <Typography
                    className={classes.title}
                    variant="h3"
                    gutterBottom
                    align="left"
                  >
                    All in Good taste food with{" "}
                    <Box
                      component="span"
                      color={Constant.COLOR_PRIMARY}
                      fontFamily={"Lobster Two"}
                      fontStyle={"italic"}
                      fontWeight={"normal"}
                    >
                      Ghém
                    </Box>
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom align="left">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quos blanditiis tenetur abc abc
                  </Typography>
                  <Box mt={4}>
                    <Button className={classes.root}>See our menu</Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={6} container justify="flex-end">
                <Box
                  border={16}
                  width="80%"
                  borderRadius={"50%"}
                  borderColor={Constant.COLOR_PRIMARY_LIGHT}
                >
                  <div className={classes.titleImg} />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>

      <Box mb={16}>
        <Container maxWidth="md">
          <Box my={6}>
            <Typography className={classes.title} variant="h5" gutterBottom>
              Why choose us
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {[1, 2, 3].map((value) => (
              <Grid item md={4} key={value}>
                <ReasonCard />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="md">
        <Box my={6}>
          <Typography className={classes.title} variant="h5" gutterBottom>
            Our Menu
          </Typography>
        </Box>
        <FeatureMenu />
      </Container>
    </div>
  );
};

export default IntroductionSection;
