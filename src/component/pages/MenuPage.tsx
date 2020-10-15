import React, { useContext, useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  ButtonBase,
  ButtonGroup,
  Container,
  Dialog,
  Divider,
  FormControl,
  Hidden,
  InputLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  useMediaQuery,
  useTheme,
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
import {
  faCartPlus,
  faMinus,
  faPlus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { green, orange, red } from "@material-ui/core/colors";
import CircleImageBox from "../atoms/CircleImageBox";
import { CartActionType, CartContext, cartStore } from "../../store/CartStore";

const useStyles = makeStyles({
  logoInText: {
    verticalAlign: "middle",
  },
  coverGradient: {
    background: `linear-gradient(135deg, ${Constant.COLOR_PRIMARY_LIGHT}, #fff, #fff)`,
  },
});

interface ChooseDishDialogProps {
  onClose: () => void;
  dish: DishInformation;
  open: boolean;
}

const ChooseDishDialog = ({ onClose, dish, open }: ChooseDishDialogProps) => {
  const [quantity, setQuantity] = useState<number>(0);
  const cartContext = useContext<CartContext>(cartStore);
  const { cartDispatch } = cartContext;
  useEffect(() => {
    const { cartState } = cartContext;
    const item = cartState.items[dish.id];
    const initQuantity = item ? item.quantity : 0;
    setQuantity(initQuantity);
  }, [dish, cartContext]);
  return (
    <Dialog open={open} onClose={onClose} fullWidth={true} maxWidth="sm">
      <CircleImageBox
        image={`${process.env.PUBLIC_URL}/img/dishes/${dish.type}/${dish.image}.jpg`}
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
            primary={dish.vnName + " " + dish.id}
            secondary={`${dish.price.toLocaleString()} VND`}
            style={{ textAlign: "center" }}
          />
        </ListItem>
      </List>
      <Box fontWeight={400} my={3} justifyContent="center" display="flex">
        <ButtonGroup>
          <Button onClick={() => setQuantity(quantity - 1)}>
            <FontAwesomeIcon icon={faMinus} />
          </Button>
          <Button>{quantity}</Button>
          <Button onClick={() => setQuantity(quantity + 1)}>
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </ButtonGroup>
      </Box>
      <Divider />
      <List>
        <ListItem
          button
          onClick={() => {
            cartDispatch({
              type: CartActionType.UPDATE,
              dishId: dish.id,
              quantity: quantity,
            });
            onClose();
          }}
        >
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
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const [ingredient, setIngredient] = useState(INGREDIENTS[0].value);
  const [openConfirmDialog, setOpenConfirmDialog] = useState<boolean>(false);
  const [chooseDish, setChooseDish] = useState<DishInformation>(DISHES[0]);
  let dishes = INGREDIENT_MAP[ingredient];
  if (!dishes) {
    dishes = DISHES;
  }
  // useEffect(() => {
  // }, [chooseDish]);
  return (
    <Box>
      <Box className={classes.coverGradient}>
        <Box mb={8}>
          <AppNav />
          <Box
            fontFamily={Constant.FONT_FAMILY_BEAUTY}
            fontStyle="italic"
            color={Constant.TEXT_SECONDARY}
            fontSize={isSmDown ? 36 : 72}
            mt={isSmDown ? 4 : 16}
            pb={isSmDown ? 4 : 12}
          >
            <img
              src={process.env.PUBLIC_URL + "/img/logo_no_text.png"}
              height={isSmDown ? 64 : 128}
              className={classes.logoInText}
              alt="Ghem's logo"
            />{" "}
            Menu
          </Box>
        </Box>
      </Box>
      <Box mb={16}>
        <Container maxWidth="lg">
          <Hidden smDown>
            <Box mb={8}>
              <Grid container spacing={2} justify="center">
                {INGREDIENTS.map((item) => (
                  <Grid
                    item
                    md={
                      item.value === "hotpot" ||
                      item.value === "party" ||
                      item.value === "dessert"
                        ? 4
                        : 2
                    }
                    key={item.name}
                  >
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
          </Hidden>
          <Hidden mdUp>
            <Box mb={3}>
              <FormControl fullWidth variant="filled">
                <InputLabel>Loại món ăn</InputLabel>
                <Select
                  native
                  value={ingredient}
                  onChange={(event) =>
                    setIngredient(event.target.value as string)
                  }
                >
                  {INGREDIENTS.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Hidden>
          <Grid container spacing={4} justify="center">
            {dishes.map((item) => (
              <Grid item md={2} xs={6} key={item.id}>
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
                      `/img/dishes/${item.type}/${item.image}.jpg`
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
        dish={chooseDish}
      />
    </Box>
  );
};

export default MenuPage;
