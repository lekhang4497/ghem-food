import React from "react";
import Grid from "@material-ui/core/Grid";
import { Button, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Constant from "../constant/Constant";
import ReasonCard from "./ReasonCard";
import FeatureMenu from "./FeatureMenu";
import AppNav from "./AppNavbar";
import ProductSection from "./ProductSection";
import FooterSection from "./FooterSection";
import {useTranslation} from "react-i18next";
import AppButton from "./AppButton";
import OutlinedButton from "./OutlinedButton";

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
    fontFamily: Constant.FONT_FAMILY_MAIN,
    fontWeight: "bold",
    color: Constant.TEXT_DARK,
  },
  titleImg: {
    borderRadius: "50%",
    maxWidth: "100%",
    background: `url("${
      process.env.PUBLIC_URL + "/img/landing/avatar.png"
    }") 50% 50% no-repeat`,
    backgroundSize: "cover",
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
  logoInText: {
    verticalAlign: "middle",
  }
});

const IntroductionSection = () => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();

  return (
    <div>
      <Box className={classes.coverGradient}>
        <Box mb={8}>
          <AppNav />
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
                  <Box
                    fontFamily={Constant.FONT_FAMILY_MAIN}
                    fontWeight="bold"
                    color={Constant.TEXT_DARK}
                    fontSize={48}
                    textAlign="left"
                    mb={3}
                  >
                    {t('welcomeEnjoy')}{" "}
                    {/*<Box*/}
                    {/*  component="span"*/}
                    {/*  color={Constant.COLOR_PRIMARY}*/}
                    {/*  fontFamily={Constant.FONT_FAMILY_BEAUTY}*/}
                    {/*  fontStyle="italic"*/}
                    {/*  fontWeight="normal"*/}
                    {/*>*/}
                    {/*  Ghém*/}
                    {/*</Box>*/}
                    <img src={process.env.PUBLIC_URL + "/img/logo_no_text.png"} height={48} className={classes.logoInText} />
                  </Box>
                  <Typography variant="subtitle1" gutterBottom align="left">
                    {t('welcomeText')}
                  </Typography>
                  <Box mt={4}>
                    <Box component='span' mr={2}>
                    <AppButton>Xem Thực Đơn</AppButton>
                    </Box>
                    <Box component='span'>
                      <OutlinedButton>Đặt bàn</OutlinedButton>
                    </Box>
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
            <Box
              fontFamily={Constant.FONT_FAMILY_MAIN}
              fontWeight="bold"
              color={Constant.TEXT_DARK}
              fontSize={28}
              mb={3}
            >
              Why choose us
            </Box>
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

      <Box mb={16}>
        <Container maxWidth="md">
          <Box
            fontFamily={Constant.FONT_FAMILY_MAIN}
            fontWeight="bold"
            color={Constant.TEXT_DARK}
            fontSize={28}
            mb={6}
          >
            Explore Our Menu
          </Box>
          <FeatureMenu />
        </Container>
      </Box>

      <Box mb={16}>
        <Container maxWidth="md">
          <Box
            fontFamily={Constant.FONT_FAMILY_MAIN}
            fontWeight="bold"
            color={Constant.TEXT_DARK}
            fontSize={28}
            mb={6}
          >
            Gói Combo Ưu Đãi
          </Box>
          <ProductSection />
        </Container>
      </Box>
      <FooterSection/>
    </div>
  );
};

export default IntroductionSection;
