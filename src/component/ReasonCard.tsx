import React from "react";
import Box from "@material-ui/core/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import Constant from "../constant/Constant";

const ReasonCard = ({icon}: any) => (
  <Box
    bgcolor={Constant.COLOR_PRIMARY_LIGHT_TRANS}
    borderRadius={5}
    p={4}
    border={1}
    borderColor={Constant.COLOR_PRIMARY_LIGHT}
    fontFamily={Constant.FONT_FAMILY_MAIN}
    boxShadow="0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
  >
    <Box mb={3}>
      <FontAwesomeIcon
        icon={icon}
        size="3x"
        color={Constant.COLOR_PRIMARY}
      />
    </Box>
    <Box mb={3} fontWeight={600} color={Constant.TEXT_DARK}>
      Various Menu
    </Box>
    <Box color={Constant.TEXT_SECONDARY}>
      Lorem ipsum dolor sit amet, consectetur.
    </Box>
  </Box>
);

export default ReasonCard;
