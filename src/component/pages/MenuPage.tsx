import React, { useState } from "react";
import { Box, Container } from "@material-ui/core";
import AppNav from "../organisms/AppNavbar";
import Grid from "@material-ui/core/Grid";
import MenuCard from "../atoms/MenuCard";
import Constant from "../../constant/Constant";
import { makeStyles } from "@material-ui/core/styles";
import FooterSection from "../organisms/FooterSection";
import ImageButton from "../atoms/ImageButton";
import { DISHES, INGREDIENT_MAP, INGREDIENTS } from "../../assets/dishes";

const useStyles = makeStyles({
  logoInText: {
    verticalAlign: "middle",
  },
  coverGradient: {
    background: `linear-gradient(135deg, ${Constant.COLOR_PRIMARY_LIGHT}, #fff, #fff)`,
  },
});

const MenuPage = () => {
  const classes = useStyles();
  const [ingredient, setIngredient] = useState(INGREDIENTS[0].value);
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
                    <ImageButton
                      image={`${process.env.PUBLIC_URL}/img/dishes/${item.value}/avatar.jpg`}
                      text={item.name}
                      active={item.value === ingredient}
                      onClick={() => setIngredient(item.value)}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Grid container spacing={4} justify="center">
            {dishes.map((item) => (
              <Grid item md={2} key={item.id}>
                <MenuCard
                  image={
                    process.env.PUBLIC_URL +
                    `/img/dishes/${item.type}/${item.id}.jpg`
                  }
                  name={item.vnName}
                  price={item.price}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <FooterSection />
    </Box>
  );
};

export default MenuPage;
