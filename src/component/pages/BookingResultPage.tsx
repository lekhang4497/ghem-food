import React from "react";
import { Box, Container, useMediaQuery, useTheme } from "@material-ui/core";
import AppNav from "../organisms/AppNavbar";
import Constant from "../../constant/Constant";
import { makeStyles } from "@material-ui/core/styles";
import FooterSection from "../organisms/FooterSection";
import CircleImageBox from "../atoms/CircleImageBox";
import AppButton from "../atoms/AppButton";
import { Link as RouterLink, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles({
  logoInText: {
    verticalAlign: "middle",
  },
  coverGradient: {
    background: `linear-gradient(135deg, ${Constant.COLOR_PRIMARY_LIGHT}, #fff, #fff)`,
  },
});

const BookingResultPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const { bookingId } = useParams();
  return (
    <Box>
      <Box className={classes.coverGradient}>
        <Box mb={8}>
          <AppNav />
        </Box>
      </Box>
      <Container maxWidth="md">
        <Box>
          <CircleImageBox
            image={process.env.PUBLIC_URL + "/img/landing/avatar.png"}
            width="30%"
            border={12}
            borderRadius={"50%"}
            borderColor={Constant.COLOR_PRIMARY_LIGHT}
            margin="auto"
          />
        </Box>
        <Box fontSize={28} mt={3} mb={1}>
          Bạn đã đặt bàn thành công<br/>Nhân viên sẽ liên hệ bạn để xác nhận việc đặt bàn
        </Box>
        <Box fontSize={28} mb={5}>
          Mã đặt bàn là <b>#{bookingId}</b>
        </Box>
        <Box textAlign="center" mb={5}>
          <AppButton component={RouterLink} to="/">
            Quay lại trang chủ
            <Box component="span" ml={1}>
              <FontAwesomeIcon icon={faHome} color="white" />
            </Box>
          </AppButton>
        </Box>
      </Container>

      <FooterSection />
    </Box>
  );
};

export default BookingResultPage;
