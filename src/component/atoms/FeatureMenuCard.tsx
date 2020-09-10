import Constant from "../../constant/Constant";
import Box from "@material-ui/core/Box";
import React from "react";
import CircleImageBox from "./CircleImageBox";
import { grey } from "@material-ui/core/colors";

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
      borderColor={grey[200]}
      fontFamily={Constant.FONT_FAMILY_MAIN}
      // boxShadow="0 2px 6px rgba(0, 21, 64, 0.14), 0 10px 20px rgba(0, 21, 64, 0.05)"
    >
      <CircleImageBox
        image={image}
        width="80%"
        margin="auto"
        border={2}
        borderRadius={"50%"}
        borderColor={grey[200]}
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
        {`${price.toLocaleString()} VND`}
      </Box>
    </Box>
  );
};

export default FeatureMenuCard;
