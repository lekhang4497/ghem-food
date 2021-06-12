import {
  Badge,
  Container,
  Drawer,
  Hidden,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Constant from "../../constant/Constant";
import React, {useContext, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Link as RouterLink} from "react-router-dom";
import {faBars, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {CartContext, cartStore} from "../../store/CartStore";

const useStyles = makeStyles({
  menuItem: {
    transition: "color 300ms",
    fontWeight: 700,
    color: Constant.TEXT_SECONDARY,
    "&:hover": {
      color: Constant.COLOR_PRIMARY,
      textDecoration: "none",
    },
  },
});

const menu = [
  {
    name: "Trang chủ",
    to: "/",
  },
  {
    name: "Thực đơn / Đặt món",
    to: "/menu",
  },
  {
    name: "Combo",
    to: "/combo",
  },
  {
    name: "Đặt bàn",
    to: "/booking",
  },
];

const AppNav = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const {cartState} = useContext<CartContext>(cartStore);
  return (
    <Box>
      <Container maxWidth="md">
        <Box py={2} fontFamily={Constant.FONT_FAMILY_MAIN}>
          <Grid container justify="flex-end">
            <Grid item xs={4} container justify="flex-start">
              <Link component={RouterLink} to="/">
                <img
                  src={process.env.PUBLIC_URL + "/img/logo.png"}
                  width={isSmDown ? 120 : 180}
                  alt="Ghem's logo"
                />
              </Link>
            </Grid>

            <Grid item xs={8} container alignItems="center">
              {/* Menu items*/}
              <Grid container spacing={4} justify="flex-end">
                <Hidden smDown>
                  {menu.map((item) => (
                    <Grid item key={item.name}>
                      <Link
                        className={classes.menuItem}
                        component={RouterLink}
                        to={item.to}
                      >
                        {item.name}
                      </Link>
                    </Grid>
                  ))}
                  <Grid item>
                    <Link
                      to="/cart"
                      className={classes.menuItem}
                      component={RouterLink}
                    >
                      <Badge
                        badgeContent={Object.keys(cartState.items).length}
                        color="error"
                      >
                        <FontAwesomeIcon icon={faShoppingCart} size="lg"/>
                      </Badge>
                    </Link>
                  </Grid>
                </Hidden>

                <Hidden mdUp>
                  <Box mr={1}>
                    <Link
                      to="/cart"
                      component={RouterLink}
                    >
                      <IconButton>
                        <Badge
                          badgeContent={Object.keys(cartState.items).length}
                          color="error"
                        >
                          <FontAwesomeIcon icon={faShoppingCart}/>
                        </Badge>
                      </IconButton>
                    </Link>
                  </Box>
                  <Box mr={1}>
                    <IconButton onClick={() => setOpenDrawer(true)}>
                      <FontAwesomeIcon icon={faBars}/>
                    </IconButton>
                  </Box>
                </Hidden>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box width={250}>
          <List>
            {menu.map((item) => (
              <ListItem
                button
                component={RouterLink}
                to={item.to}
                key={item.name}
              >
                <ListItemText primary={item.name}/>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default AppNav;
