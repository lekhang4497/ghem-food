import React from "react";
import { Box, ButtonBase, createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Constant from "../../constant/Constant";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      minWidth: 300,
      width: "100%",
    },
    image: {
      position: "relative",
      height: 150,
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
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: "absolute",
      bottom: -2,
      left: "calc(50% - 9px)",
      transition: theme.transitions.create("opacity"),
    },
  })
);

interface ImageButtonProps {
  image: string;
  text: string;
  onClick: () => void;
  active: boolean;
}

const ImageButton = (props: ImageButtonProps) => {
  const classes = useStyles(props);
  const { text, image, onClick, active } = props;
  return (
    <ButtonBase
      focusRipple
      className={classes.image}
      focusVisibleClassName={classes.focusVisible}
      style={{
        width: "100%",
      }}
      onClick={onClick}
    >
      <span
        className={classes.imageSrc}
        style={{
          backgroundImage: `url(${image})`,
          backgroundColor: Constant.COLOR_PRIMARY_LIGHT_TRANS,
        }}
      />
      {!active && <span className={classes.imageBackdrop} />}
      {!active && (
        <span className={classes.imageButton}>
          <Box
            fontFamily={Constant.FONT_FAMILY_BEAUTY}
            fontSize={36}
            color={"white"}
          >
            {text}
          </Box>
        </span>
      )}
    </ButtonBase>
  );
};

export default ImageButton;
