import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Constant from "../../constant/Constant";
import { Hidden, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import AppButton from "../atoms/AppButton";
import OutlinedButton from "../atoms/OutlinedButton";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import CircleImageBox from "../atoms/CircleImageBox";

const useStyles = makeStyles({
  titleImg: {
    borderRadius: "50%",
    maxWidth: "100%",
    background: `url("${process.env.PUBLIC_URL}/img/landing/avatar.png") 50% 50% no-repeat`,
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
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  return (
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
            fontSize={isSmDown ? 24 : 48}
            textAlign={isSmDown ? "center" : "left"}
            mb={isSmDown ? 1 : 3}
          >
            {t("welcomeEnjoy")}{" "}
            <img
              src={process.env.PUBLIC_URL + "/img/logo_no_text.png"}
              height={58}
              className={classes.logoInText}
              alt="Ghém's logo"
            />
          </Box>
          <Typography
            variant="subtitle1"
            gutterBottom
            align={isSmDown ? "center" : "left"}
          >
            {t("welcomeText")}
          </Typography>

          <Hidden mdUp>
            <CircleImageBox
              image={process.env.PUBLIC_URL + "/img/landing/avatar.png"}
              width="80%"
              border={12}
              borderRadius={"50%"}
              borderColor={Constant.COLOR_PRIMARY_LIGHT}
              margin="auto"
              mt={2}
            />
          </Hidden>
          <Box mt={4} textAlign={isSmDown ? "center" : "left"}>
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
      <Hidden smDown>
        <Grid item md={6} container justify={isSmDown ? "center" : "flex-end"}>
          <CircleImageBox
            image={process.env.PUBLIC_URL + "/img/landing/avatar.png"}
            width="80%"
            border={16}
            borderRadius={"50%"}
            borderColor={Constant.COLOR_PRIMARY_LIGHT}
          />
        </Grid>
      </Hidden>
    </Grid>
  );
};

export default WelcomeSection;
