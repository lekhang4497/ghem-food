import Box from "@material-ui/core/Box";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Constant from "../constant/Constant";
import grey from "@material-ui/core/colors/grey";

const useStyles = makeStyles({
  featureImg: {
    width: "100%",
    borderRadius: 10,
    paddingBottom: "60%",
    borderWidth: 1,
    boxSizing: "border-box",
    borderColor: grey[300],
    borderStyle: "solid",
    margin: "auto",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    background: `url("${
      process.env.PUBLIC_URL + "/img/product.jpg"
    }") 50% 50% no-repeat`,
  },
});

const ProductCard = () => {
  const classes = useStyles();
  return (
    <Box overflow="hidden" width="100%" fontFamily={Constant.FONT_FAMILY_MAIN}>
      <Box mb={3}>
        <div className={classes.featureImg} />
      </Box>
      <Box mb={2} fontWeight="bold" color={Constant.TEXT_DARK} textAlign="left">
        Weekly Set
      </Box>
      <Box
        mb={1}
        fontFamily={Constant.FONT_FAMILY_MAIN}
        textAlign="left"
        fontSize={14}
        color={Constant.TEXT_SECONDARY}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Box>
      <Box
        fontWeight={600}
        color={Constant.COLOR_PRIMARY}
        textAlign="left"
        fontSize={14}
      >
        Read more
      </Box>
    </Box>
  );
};

export default ProductCard;
