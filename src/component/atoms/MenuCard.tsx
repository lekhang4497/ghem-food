import React from "react";
import { Box } from "@material-ui/core";
import Constant from "../../constant/Constant";
import { orange } from "@material-ui/core/colors";
import CircleImageBox from "./CircleImageBox";
import Utils from "../../constant/Utils";

interface MenuCardProps {
  image: string;
  name: string;
  price: number;
  width?: number | string;
}

const MenuCard = ({ name, price, image, width = "100%" }: MenuCardProps) => {
  return (
    <Box width={width}>
      <CircleImageBox
        image={image}
        width="80%"
        margin="auto"
        border={4}
        borderRadius={"50%"}
        borderColor={orange[200]}
        mb={2}
      />
      <Box mb={1} fontWeight={700} color={Constant.TEXT_DARK}>
        {name}
      </Box>
      <Box fontWeight={700} color={Constant.COLOR_PRIMARY}>
        {Utils.toPriceString(price)}
      </Box>
    </Box>
  );
};

export default MenuCard;
