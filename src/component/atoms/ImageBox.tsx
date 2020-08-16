import { Box, BoxProps } from "@material-ui/core";
import Constant from "../../constant/Constant";
import React from "react";

interface ImageBoxProps extends BoxProps {
  children?: any;
  image: string;
}

const ImageBox = (props: ImageBoxProps) => {
  const { image, children } = props;
  return (
    <Box {...props} position="relative" overflow="hidden">
      <span
        style={{
          backgroundImage: `url(${image})`,
          backgroundColor: Constant.COLOR_PRIMARY_LIGHT_TRANS,
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      />
      {children}
    </Box>
  );
};

export default ImageBox;
