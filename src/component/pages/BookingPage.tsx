import { Box, Container, Paper } from "@material-ui/core";
import AppNav from "../organisms/AppNavbar";
import React from "react";
import FooterSection from "../organisms/FooterSection";
import Constant from "../../constant/Constant";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import BookingForm from "../organisms/BookingForm";

const BookingPage = () => {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Box >
        <AppNav />
      </Box>

      <Box py={6} bgcolor={Constant.COLOR_PRIMARY_LIGHT_TRANS}>
        <Container maxWidth="lg">
          <Box
            fontFamily={Constant.FONT_FAMILY_MAIN}
            fontWeight="bold"
            color={Constant.TEXT_DARK}
            fontSize={28}
            mb={6}
          >
            Đặt Bàn / Đặt Tiệc
          </Box>
          <Paper>
            <Box p={4}>
              <BookingForm />
            </Box>
          </Paper>
        </Container>
      </Box>
      <FooterSection />
    </MuiPickersUtilsProvider>
  );
};

export default BookingPage;
