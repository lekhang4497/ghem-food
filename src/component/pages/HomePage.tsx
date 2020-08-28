import React from "react";
import { Container } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Constant from "../../constant/Constant";
import FeatureMenu from "../organisms/FeatureMenu";
import AppNav from "../organisms/AppNavbar";
import ProductSection from "../organisms/ProductSection";
import FooterSection from "../organisms/FooterSection";
import AppButton from "../atoms/AppButton";
import WelcomeSection from "../organisms/WelcomeSection";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link as RouterLink } from "react-router-dom";
import SectionTitle from "../atoms/SectionTitle";
import InstructionSection from "../organisms/InstructionSection";
import AboutSection from "../organisms/AboutSection";

const BACKGROUND_GRADIENT = `linear-gradient(135deg, ${Constant.COLOR_PRIMARY_LIGHT}, #fff, #fff)`;

const HomePage: React.FC = () => {
  return (
    <div>
      <Box
        pb={8}
        style={{
          background: BACKGROUND_GRADIENT,
        }}
      >
        <AppNav />
        <Container maxWidth="md">
          <Box mt={8}>
            <WelcomeSection />
          </Box>
        </Container>
      </Box>

      <Container maxWidth="md">

        <Box mb={16} mt={16}>
          {/*<SectionTitle text="Ngon Khoẻ Cùng Ghém" />*/}
          <AboutSection />
        </Box>

        <Box mb={16}>
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
        </Box>

        <Box mb={16}>
          <SectionTitle text="Gói Combo Ưu Đãi" />
          <ProductSection />
        </Box>

        <Box mb={16}>
          <SectionTitle text="Đặt Hàng Đơn Giản" />
          <InstructionSection />
        </Box>
      </Container>

      <FooterSection />
    </div>
  );
};

export default HomePage;
