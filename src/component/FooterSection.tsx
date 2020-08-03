import Box from "@material-ui/core/Box";
import { Container, Tab, Tabs, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import MenuCard from "./MenuCard";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Constant from "../constant/Constant";
import grey from "@material-ui/core/colors/grey";

const FooterSection = () => {
  return (
    <Box
      fontFamily={Constant.FONT_FAMILY_MAIN}
      bgcolor={Constant.COLOR_PRIMARY_LIGHT_TRANS}
      py={12}
    >
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item md={6}>
            <Box
              textAlign="left"
              color={Constant.COLOR_PRIMARY}
              fontFamily={"Lobster Two"}
              fontStyle={"italic"}
              fontWeight={"normal"}
              fontSize={64}
            >
              Ghém
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
