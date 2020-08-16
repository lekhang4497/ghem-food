import React from "react";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Constant from "../../constant/Constant";
import InstructionCard from "../atoms/InstructionCard";
import FeatureMenu from "../organisms/FeatureMenu";
import AppNav from "../organisms/AppNavbar";
import ProductSection from "../ProductSection";
import FooterSection from "../organisms/FooterSection";
import AppButton from "../atoms/AppButton";
import WelcomeSection from "../organisms/WelcomeSection";
import {
  faAppleAlt,
  faArrowRight,
  faPhone,
  faTruck,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link as RouterLink } from "react-router-dom";
import SectionTitle from "../atoms/SectionTitle";
import InstructionSection from "../organisms/InstructionSection";

const useStyles = makeStyles({
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

const HomePage = () => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.coverGradient}>
        <Box mb={8}>
          <AppNav />
        </Box>

        <Box pb={8}>
          <WelcomeSection />
        </Box>
      </Box>

      <Box mb={16} mt={12}>
        <Container maxWidth="md">
          <SectionTitle text="Thực Đơn Đa Dạng" />
          <FeatureMenu />
          <Box textAlign="right" mt={2}>
            <AppButton component={RouterLink} to="/menu">
              Xem Toàn Bộ Thực Đơn
              <Box component="span" ml={1}>
                <FontAwesomeIcon icon={faArrowRight} color="white" />
              </Box>
            </AppButton>
          </Box>
        </Container>
      </Box>

      <Box mb={16}>
        <Container maxWidth="md">
          <SectionTitle text="Gói Combo Ưu Đãi" />
          <ProductSection />
        </Container>
      </Box>

      <Box mb={16}>
        <Container maxWidth="md">
          <Box my={6}>
            <SectionTitle text="Đặt Hàng Đơn Giản" />
          </Box>
          <InstructionSection />
        </Container>
      </Box>

      <FooterSection />
    </div>
  );
};

export default HomePage;
