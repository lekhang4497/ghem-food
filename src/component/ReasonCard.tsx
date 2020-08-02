import React from "react";
import Box from "@material-ui/core/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import Constant from "../constant/Constant";

const ReasonCard = () => (
  <Box bgcolor={Constant.COLOR_PRIMARY_LIGHT_TRANS} borderRadius={5} p={4}>
    <Box mb={3}>
      <FontAwesomeIcon
        icon={faCarrot}
        size="3x"
        color={Constant.COLOR_PRIMARY}
      />
    </Box>
    <Box mb={3} fontWeight="bold" color={Constant.TEXT_DARK}>
      Various Menu
    </Box>
    <Box color={Constant.TEXT_SECONDARY}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis
      tenetur
    </Box>
  </Box>
);

export default ReasonCard;
