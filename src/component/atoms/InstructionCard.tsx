import React from "react";
import Box from "@material-ui/core/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Constant from "../../constant/Constant";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface InstructionCardProps {
  icon: IconProp;
  name: string;
  description: string;
}

const InstructionCard = ({ icon, name, description }: InstructionCardProps) => (
  <Box
    bgcolor={Constant.COLOR_PRIMARY_LIGHT_TRANS}
    borderRadius={5}
    p={4}
    border={1}
    borderColor={Constant.COLOR_PRIMARY_LIGHT}
    fontFamily={Constant.FONT_FAMILY_MAIN}
    height="100%"
    boxSizing="border-box"
    boxShadow="0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
  >
    <Box mb={3}>
      <FontAwesomeIcon icon={icon} size="3x" color={Constant.COLOR_PRIMARY} />
    </Box>
    <Box mb={3} fontWeight={600} color={Constant.TEXT_DARK}>
      {name}
    </Box>
    <Box color={Constant.TEXT_SECONDARY}>{description}</Box>
  </Box>
);

export default InstructionCard;
