import React from "react";
import { Box } from "@material-ui/core";
import Constant from "../constant/Constant";
import { makeStyles } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

const useStyles = makeStyles({
  img: (props: MenuCardProps) => ({
    borderRadius: "50%",
    borderWidth: 2,
    borderColor: grey[300],
    borderStyle: "solid",
    width: "80%",
    paddingBottom: "80%",
    margin: "auto",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    background: `url("${props.image}") 50% 50% no-repeat`,
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  }),
});

interface MenuCardProps {
  image: string;
  name: string;
  price: number;
}

const MenuCard = (props: MenuCardProps) => {
  const classes = useStyles(props);
  const { name, price } = props;
  return (
    <Box>
      <Box mb={2}>
        <div className={classes.img} />
      </Box>
      <Box mb={1} fontWeight={700} color={Constant.TEXT_DARK}>
        {name}
      </Box>
      <Box fontWeight={700} color={Constant.COLOR_PRIMARY}>
        {`${price}.000 VND`}
      </Box>
    </Box>
  );
};

export default MenuCard;
