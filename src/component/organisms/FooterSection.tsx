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
          <Grid item md={6} container  direction="column" alignItems="flex-start">
            <Box mb={3}>
              <img
                src={process.env.PUBLIC_URL + "/img/logo.png"}
                width={180}
                alt="Ghem's logo"
              />
            </Box>
            <Box
              mb={1}
              fontWeight="bold"
              color={Constant.TEXT_DARK}
              textAlign="left"
            >
              Công ty TNHH Chương Anh
            </Box>
            <Box
              mb={1}
              color={Constant.TEXT_DARK}
              textAlign="left"
            >
              Giấy CNĐKDN: 0314248097
            </Box>
            <Box
              mb={1}
              color={Constant.TEXT_DARK}
              textAlign="left"
            >
              Ngày cấp 24/02/2017
            </Box>
            <Box
              mb={1}
              color={Constant.TEXT_DARK}
              textAlign="left"
            >
              Cơ quan cấp: Phòng đăng ký kinh doanh Sở kế hoạch và đầu tư Thành Phố Hồ Chí Minh
            </Box>
            <Box
              color={Constant.TEXT_DARK}
              textAlign="left"
            >
              Địa chỉ: 103 Pasteur, Phường Bến Nghé, Quận 1, TP. HCM
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box
              mb={3}
              fontWeight="bold"
              color={Constant.TEXT_DARK}
              textAlign="left"
            >
              Liên hệ
            </Box>
            <Box
              mb={2}
              fontWeight={600}
              color={Constant.TEXT_SECONDARY}
              textAlign="left"
            >
              (+84) 377 46 03 04
            </Box>
            <Box
              mb={2}
              fontWeight={600}
              color={Constant.TEXT_SECONDARY}
              textAlign="left"
            >
              103 Pasteur, Bến Nghé, Quận 1, TP. HCM
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
