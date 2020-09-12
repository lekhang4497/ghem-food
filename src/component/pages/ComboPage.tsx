import React from "react";
import { Box, Container, useMediaQuery, useTheme } from "@material-ui/core";
import AppNav from "../organisms/AppNavbar";
import Constant from "../../constant/Constant";
import { makeStyles } from "@material-ui/core/styles";
import FooterSection from "../organisms/FooterSection";
import { COMBOS } from "../../assets/dishes";

const useStyles = makeStyles({
  logoInText: {
    verticalAlign: "middle",
  },
  coverGradient: {
    background: `linear-gradient(135deg, ${Constant.COLOR_PRIMARY_LIGHT}, #fff, #fff)`,
  },
});

const ComboPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box>
      <Box className={classes.coverGradient}>
        <Box mb={8}>
          <AppNav />
          <Box
            fontFamily={Constant.FONT_FAMILY_BEAUTY}
            fontStyle="italic"
            color={Constant.TEXT_SECONDARY}
            fontSize={isSmDown ? 36 : 72}
            mt={isSmDown ? 4 : 16}
            pb={isSmDown ? 4 : 12}
          >
            <img
              src={process.env.PUBLIC_URL + "/img/logo_no_text.png"}
              height={isSmDown ? 64 : 128}
              className={classes.logoInText}
              alt="Ghem's logo"
            />{" "}
            Combo
          </Box>
        </Box>
      </Box>
      <Box mb={16}>
        <Container maxWidth="md">
          {COMBOS.map((combo) => (
            <Box
              key={combo.value}
              boxShadow="0 5px 15px rgba(0,0,0,0.15)"
              borderRadius={10}
              overflow="hidden"
              mb={6}
            >
              <img
                style={{ width: "100%", display: "block" }}
                src={`${process.env.PUBLIC_URL}/img/combo/poster/${combo.value}.png`}
                alt={combo.value}
              />
            </Box>
          ))}
        </Container>
      </Box>
      <FooterSection />
    </Box>
  );
};

export default ComboPage;
