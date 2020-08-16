import React from "react";
import { Box } from "@material-ui/core";
import Constant from "../../constant/Constant";
import { orange } from "@material-ui/core/colors";
import CircleImageBox from "./CircleImageBox";

interface MenuCardProps {
  image: string;
  name: string;
  price: number;
}

const MenuCard = ({ name, price, image }: MenuCardProps) => {
  return (
    <Box>
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
        {`${price}.000 VND`}
      </Box>
    </Box>
  );
};

export default MenuCard;
