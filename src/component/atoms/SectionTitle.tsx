import Constant from "../../constant/Constant";
import Box from "@material-ui/core/Box";
import React from "react";

const SectionTitle = ({ text }: { text: string }) => {
  return (
    <Box
      fontFamily={Constant.FONT_FAMILY_MAIN}
      fontWeight="bold"
      color={Constant.TEXT_DARK}
      fontSize={28}
      mb={6}
    >
      {text}
    </Box>
  );
};

export default SectionTitle;
