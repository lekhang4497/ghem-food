import Constant from "../../constant/Constant";
import Box from "@material-ui/core/Box";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

const useStyles = makeStyles({
  featureImg: (props: MenuCardProps) => ({
    borderRadius: "50%",
    borderWidth: 2,
    borderColor: grey[400],
    borderStyle: "solid",
    width: "80%",
    paddingBottom: "80%",
    margin: "auto",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    background: `url("${props.image}") 50% 50% no-repeat`,
  }),
});

interface MenuCardProps {
  image: string;
  name: string;
  price: number;
}

const FeatureMenuCard = (props: MenuCardProps) => {
  const classes = useStyles(props);
  const { name, price } = props;
  return (
    <Box
      bgcolor={Constant.COLOR_PRIMARY_LIGHT_TRANS}
      p={2}
      borderRadius={5}
      width="100%"
      boxSizing="border-box"
      border={1}
      borderColor={Constant.COLOR_PRIMARY_LIGHT}
      fontFamily={Constant.FONT_FAMILY_MAIN}
      boxShadow="0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
    >
      <Box mb={3}>
        <div className={classes.featureImg} />
      </Box>
      <Box
        mb={1}
        fontWeight={600}
        color={Constant.TEXT_DARK}
        overflow="hidden"
        textOverflow="ellipsis"
        whiteSpace="nowrap"
      >
        {name}
      </Box>
      <Box fontWeight={600} color={Constant.COLOR_PRIMARY}>
        {`${price}.000 VND`}
      </Box>
    </Box>
  );
};

export default FeatureMenuCard;
