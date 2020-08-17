import React from "react";
import ImageBox from "./ImageBox";
import { BoxProps } from "@material-ui/core";

interface CircleImageBoxProps {
  image: string;
  children?: any;
  width: number | string;
}

const CircleImageBox = (
  props: CircleImageBoxProps & Omit<BoxProps, keyof CircleImageBoxProps>
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
