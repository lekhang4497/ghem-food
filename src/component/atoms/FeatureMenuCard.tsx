import Constant from "../../constant/Constant";
import Box from "@material-ui/core/Box";
import React from "react";
import CircleImageBox from "./CircleImageBox";
import { orange } from "@material-ui/core/colors";

interface MenuCardProps {
  image: string;
  name: string;
  price: number;
}

const FeatureMenuCard = ({ name, price, image }: MenuCardProps) => {
  return (
    <Box
      bgcolor={Constant.COLOR_PRIMARY_LIGHT_TRANS}
      p={2}
      borderRadius={5}
      width="100%"
      boxSizing="border-box"
      border={1}
      borderColor={Constant.COLOR_PRIMARY_LIGHT}
      fontFamily={Constant.FONT_FAMILY_MAIN}
      boxShadow="0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
    >
      <CircleImageBox
        image={image}
        width="80%"
        margin="auto"
        border={2}
        borderRadius={"50%"}
        borderColor={orange[200]}
        mb={3}
      />
      <Box
        mb={1}
        fontWeight={600}
        color={Constant.TEXT_DARK}
        overflow="hidden"
        textOverflow="ellipsis"
        whiteSpace="nowrap"
      >
        {name}
      </Box>
      <Box fontWeight={600} color={Constant.COLOR_PRIMARY}>
        {`${price}.000 VND`}
      </Box>
    </Box>
  );
};

export default FeatureMenuCard;
