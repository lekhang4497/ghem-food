import Constant from "../constant/Constant";
import Box from "@material-ui/core/Box";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  featureImg: {
    borderRadius: "50%",
    width: "80%",
    paddingBottom: "80%",
    margin: "auto",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    background:
      'url("http://www.ghemsaigon.com/assets/images/food/1.jpg") 50% 50% no-repeat',
  },
});

const MenuCard = () => {
  const classes = useStyles();
  return (
    <Box
      bgcolor={Constant.COLOR_PRIMARY_LIGHT_TRANS}
      p={2}
      borderRadius={5}
      width="100%"
      border={1}
      borderColor={Constant.COLOR_PRIMARY_LIGHT}
      fontFamily={Constant.FONT_FAMILY_MAIN}
    >
      <Box mb={3}>
        <div className={classes.featureImg} />
      </Box>
      <Box mb={1} fontWeight={600} color={Constant.TEXT_DARK}>
        Various Menu
      </Box>
      <Box fontWeight={600} color={Constant.COLOR_PRIMARY}>
        $100
      </Box>
    </Box>
  );
};

export default MenuCard;
