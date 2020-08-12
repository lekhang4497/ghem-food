import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React from "react";
import Constant from "../../constant/Constant";

const FooterSection = () => {
  return (
    <Box
      fontFamily={Constant.FONT_FAMILY_MAIN}
      bgcolor={Constant.COLOR_PRIMARY_LIGHT_TRANS}
      py={12}
    >
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item md={6} container justify="flex-start">
            <Box>
              <img
                src={process.env.PUBLIC_URL + "/img/logo.png"}
                width={180}
                alt="Ghem's logo"
              />
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box
              mb={3}
              fontWeight="bold"
              color={Constant.TEXT_DARK}
              textAlign="left"
            >
              Contact
            </Box>
            <Box
              mb={2}
              fontWeight={600}
              color={Constant.TEXT_SECONDARY}
              textAlign="left"
            >
              +84 1677 46 03 04
            </Box>
            <Box
              mb={2}
              fontWeight={600}
              color={Constant.TEXT_SECONDARY}
              textAlign="left"
            >
              103 Pasteur, Bến Nghé, District 1, HCM City
            </Box>
            <Box
              fontWeight={600}
              color={Constant.TEXT_SECONDARY}
              textAlign="left"
            >
              ghemsaigon@gmail.com
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FooterSection;
