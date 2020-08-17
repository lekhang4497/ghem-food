import React from "react";
import {Box, ButtonBase, createStyles, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Constant from "../../constant/Constant";
import ImageBox from "./ImageBox";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      position: "relative",
      [theme.breakpoints.down("xs")]: {
        width: "100% !important", // Overrides inline-style
        height: 100,
      },
      "&:hover, &$focusVisible": {
        zIndex: 1,
        "& $imageBackdrop": {
          opacity: 0.15,
        },
        "& $imageMarked": {
          opacity: 0,
        },
        "& $imageTitle": {
          border: "4px solid currentColor",
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    imageSrc: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: "cover",
      backgroundPosition: "center 40%",
    },
    imageBackdrop: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create("opacity"),
    },
    imageTitle: {
      position: "relative",
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
        theme.spacing(1) + 6
      }px`,
    },
  })
);

interface ImageButtonProps {
  image: string;
  text: string;
  onClick: () => void;
  active: boolean;
  width: number | string;
  height: number | string;
}

const ImageButton = (props: ImageButtonProps) => {
  const classes = useStyles(props);
  const {text, image, onClick, active, width, height} = props;
  return (
    <ButtonBase
      focusRipple
      className={classes.image}
      focusVisibleClassName={classes.focusVisible}
      style={{
        width,
        height
      }}
      onClick={onClick}
    >
      <ImageBox image={image} width="100%" height="100%">
        {!active && <span className={classes.imageBackdrop}/>}
        {!active && (
          <Box
            fontFamily={Constant.FONT_FAMILY_BEAUTY}
            fontSize={36}
            color={"white"}
            position="absolute"
            left={0}
            right={0}
            top={0}
            bottom={0}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {text}
          </Box>
        )}
      </ImageBox>
    </ButtonBase>
  );
};

export default ImageButton;
