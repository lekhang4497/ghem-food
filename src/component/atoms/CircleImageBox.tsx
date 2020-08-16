import React from "react";
import ImageBox from "./ImageBox";
import { BoxProps } from "@material-ui/core";

interface SquareImageBoxProps {
  image: string;
  children?: any;
  width: number | string;
}

const CircleImageBox = (
  props: SquareImageBoxProps & Omit<BoxProps, keyof SquareImageBoxProps>
) => {
  const { image, children, width } = props;
  return (
    <ImageBox
      {...props}
      image={image}
      width={width}
      paddingBottom={width}
      borderRadius="50%"
    >
      {children}
    </ImageBox>
  );
};

export default CircleImageBox;
