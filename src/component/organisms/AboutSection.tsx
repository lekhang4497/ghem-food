import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Constant from "../../constant/Constant";
import { Typography } from "@material-ui/core";
import AppButton from "../atoms/AppButton";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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

const AboutSection = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={6}>
      <Grid item md={6}>
        <img
          style={{
            maxWidth: "100%",
            borderRadius: 10,
            opacity: 0.9,
            boxSizing: "border-box",
          }}
          src={process.env.PUBLIC_URL + "/img/landing/delivery_demo.jpg"}
        />
      </Grid>
      <Grid item md={6}>
        <Box
          fontFamily={Constant.FONT_FAMILY_MAIN}
          fontWeight="bold"
          color={Constant.TEXT_DARK}
          fontSize={28}
          mb={3}
          textAlign="left"
        >
          <Box mb={1}>Thực phẩm tươi sạch</Box>Đóng gói an toàn
        </Box>
        <Typography variant="subtitle1" gutterBottom align="left">
          Thức ăn tươi ngon, dinh dưỡng 🍅🍍 Dùng tại nhà tiện lợi 🏡 An toàn
          cho môi trường với hộp bã mía và hộp giấy.
        </Typography>
        <Typography variant="subtitle1" gutterBottom align="left">
          Không cần vắt óc nghĩ trưa nay tối nay ăn gì, Ghém giao đến tận nơi 😘
          Món gì cũng có 😍👍🥢
        </Typography>
        <Box mt={4} textAlign="left">
          <AppButton component={RouterLink} to="/menu">
            Đặt giao hàng
          </AppButton>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AboutSection;
