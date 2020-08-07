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
import { useTranslation } from "react-i18next";
import AppButton from "./AppButton";
import OutlinedButton from "./OutlinedButton";
import WelcomeSection from "./WelcomeSection";
import {faAppleAlt, faPhone, faTruck, faUtensils} from "@fortawesome/free-solid-svg-icons";

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
  },
});

const IntroductionSection = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div>
      <Box className={classes.coverGradient}>
        <Box mb={8}>
          <AppNav />
        </Box>

        <Box pb={8}>
          <WelcomeSection/>
        </Box>
      </Box>


      <Box mb={16} mt={12}>
        <Container maxWidth="md">
          <Box
            fontFamily={Constant.FONT_FAMILY_MAIN}
            fontWeight="bold"
            color={Constant.TEXT_DARK}
            fontSize={28}
            mb={6}
          >
            Khám Phá Thực Đơn
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
              Đặt Hàng Đơn Giản
            </Box>
          </Box>
          <Grid container spacing={3} justify="center">
            {[faAppleAlt, faPhone, faTruck ,faUtensils].map((value,idx) => (
              <Grid item md={3} sm={6} key={idx}>
                <ReasonCard icon={value}/>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <FooterSection />

    </div>
  );
};

export default IntroductionSection;
