import Box from "@material-ui/core/Box";
import React from "react";
import Constant from "../../constant/Constant";
import ImageBox from "./ImageBox";
import { ComboInformation } from "../../assets/dishes";

const ProductCard = ({ name, description, value }: ComboInformation) => {
  return (
    <Box overflow="hidden" width="100%" fontFamily={Constant.FONT_FAMILY_MAIN}>
      <ImageBox
        image={`${process.env.PUBLIC_URL}/img/combo/${value}.jpg`}
        mb={2}
        width="100%"
        paddingBottom="66%"
        borderRadius={8}
      />
      <Box mb={2} fontWeight="bold" color={Constant.TEXT_DARK} textAlign="left">
        {name}
      </Box>
      <Box
        mb={1}
        fontFamily={Constant.FONT_FAMILY_MAIN}
        textAlign="left"
        fontSize={14}
        color={Constant.TEXT_SECONDARY}
      >
        {description}
      </Box>
      <Box
        fontWeight={600}
        color={Constant.COLOR_PRIMARY}
        textAlign="left"
        fontSize={14}
      >
        Xem chi tiết
      </Box>
    </Box>
  );
};

export default ProductCard;
