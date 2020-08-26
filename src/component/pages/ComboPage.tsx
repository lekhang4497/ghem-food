import React from "react";
import { Box, Container } from "@material-ui/core";
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
  return (
    <Box>
      <Box className={classes.coverGradient}>
        <Box mb={8}>
          <AppNav />
          <Box
            fontFamily={Constant.FONT_FAMILY_BEAUTY}
            fontStyle="italic"
            color={Constant.TEXT_SECONDARY}
            fontSize={72}
            mt={16}
            pb={12}
          >
            <img
              src={process.env.PUBLIC_URL + "/img/logo_no_text.png"}
              height={128}
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
                style={{ width: "100%" }}
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
