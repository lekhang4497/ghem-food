import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Constant from "../../constant/Constant";
import { Container, Typography } from "@material-ui/core";
import AppButton from "../atoms/AppButton";
import OutlinedButton from "../atoms/OutlinedButton";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles({
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
  logoInText: {
    verticalAlign: "middle",
  },
});

const WelcomeSection = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Box>
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
                {t("welcomeEnjoy")}{" "}
                <img
                  src={process.env.PUBLIC_URL + "/img/logo_no_text.png"}
                  height={58}
                  className={classes.logoInText}
                  alt="Ghém's logo"
                />
              </Box>
              <Typography variant="subtitle1" gutterBottom align="left">
                {t("welcomeText")}
              </Typography>
              <Box mt={4} textAlign="left">
                <Box component="span" mr={2}>
                  <AppButton component={RouterLink} to="/booking">
                    Đặt Bàn
                  </AppButton>
                </Box>
                <Box component="span">
                  <OutlinedButton component={RouterLink} to="/menu">
                    Xem Thực Đơn
                  </OutlinedButton>
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
  );
};

export default WelcomeSection;
