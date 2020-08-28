import React, { useState } from "react";
import {
  Avatar,
  Box,
  ButtonBase,
  Container,
  Dialog,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
} from "@material-ui/core";
import AppNav from "../organisms/AppNavbar";
import Grid from "@material-ui/core/Grid";
import MenuCard from "../atoms/MenuCard";
import Constant from "../../constant/Constant";
import { makeStyles } from "@material-ui/core/styles";
import FooterSection from "../organisms/FooterSection";
import ImageButton from "../atoms/ImageButton";
import {
  DISHES,
  DishInformation,
  INGREDIENT_MAP,
  INGREDIENTS,
} from "../../assets/dishes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { green, orange, red } from "@material-ui/core/colors";
import CircleImageBox from "../atoms/CircleImageBox";

const useStyles = makeStyles({
  logoInText: {
    verticalAlign: "middle",
  },
  coverGradient: {
    background: `linear-gradient(135deg, ${Constant.COLOR_PRIMARY_LIGHT}, #fff, #fff)`,
  },
});

interface ChooseDishDialogProps {
  onConfirm: () => void;
  onClose: () => void;
  dish: DishInformation;
  open: boolean;
}

const ChooseDishDialog = ({
  onClose,
  dish,
  open,
  onConfirm,
}: ChooseDishDialogProps) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth={true} maxWidth="sm">
      <CircleImageBox
        image={`${process.env.PUBLIC_URL}/img/dishes/${dish.type}/${dish.id}.jpg`}
        width="50%"
        margin="auto"
        border={4}
        borderRadius={"50%"}
        borderColor={orange[200]}
        mt={3}
      />
      <List>
        <ListItem>
          <ListItemText
            primary={dish.vnName}
            secondary={`${dish.price}.000 VND`}
            style={{ textAlign: "center" }}
          />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={onConfirm}>
          <ListItemAvatar>
            <Avatar style={{ backgroundColor: green[400] }}>
              <FontAwesomeIcon icon={faCartPlus} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Thêm vào giỏ hàng" />
        </ListItem>
        <ListItem button onClick={onClose}>
          <ListItemAvatar>
            <Avatar style={{ backgroundColor: red[400] }}>
              <FontAwesomeIcon icon={faTimes} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Huỷ" />
        </ListItem>
      </List>
    </Dialog>
  );
};

const MenuPage = () => {
  const classes = useStyles();
  const [ingredient, setIngredient] = useState(INGREDIENTS[0].value);
  const [openConfirmDialog, setOpenConfirmDialog] = useState<boolean>(false);
  const [chooseDish, setChooseDish] = useState<DishInformation>(DISHES[0]);
  let dishes = INGREDIENT_MAP.get(ingredient);
  if (!dishes) {
    dishes = DISHES;
  }
  return (
    <Box>
      <Box className={classes.coverGradient}>
        <Box mb={8}>
          <AppNav />
          <Box
            fontFamily={Constant.FONT_FAMILY_BEAUTY}
            fontStyle="italic"
            color={Constant.TEXT_SECONDARY}
            fontSize={72}
            mt={16}
            pb={12}
          >
            <img
              src={process.env.PUBLIC_URL + "/img/logo_no_text.png"}
              height={128}
              className={classes.logoInText}
              alt="Ghem's logo"
            />{" "}
            Menu
          </Box>
        </Box>
      </Box>
      <Box mb={16}>
        <Container maxWidth="lg">
          <Box mb={8}>
            <Grid container spacing={2} justify="center">
              {INGREDIENTS.map((item) => (
                <Grid item md={2} key={item.name}>
                  <Box>
                    <Paper style={{ overflow: "hidden" }} variant="outlined">
                      <ImageButton
                        width="100%"
                        height={120}
                        image={`${process.env.PUBLIC_URL}/img/dishes/${item.value}/avatar.jpg`}
                        text={item.name}
                        active={item.value === ingredient}
                        onClick={() => setIngredient(item.value)}
                      />
                    </Paper>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Grid container spacing={4} justify="center">
            {dishes.map((item) => (
              <Grid item md={2} key={item.id}>
                <ButtonBase
                  style={{ width: "100%" }}
                  onClick={() => {
                    setChooseDish(item);
                    setOpenConfirmDialog(true);
                  }}
                >
                  <MenuCard
                    image={
                      process.env.PUBLIC_URL +
                      `/img/dishes/${item.type}/${item.id}.jpg`
                    }
                    name={item.vnName}
                    price={item.price}
                  />
                </ButtonBase>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <FooterSection />
      <ChooseDishDialog
        open={openConfirmDialog}
        onClose={() => setOpenConfirmDialog(false)}
        onConfirm={() => {
          setOpenConfirmDialog(false);
        }}
        dish={chooseDish}
      />
    </Box>
  );
};

export default MenuPage;
