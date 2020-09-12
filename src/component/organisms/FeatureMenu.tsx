import Box from "@material-ui/core/Box";
import { Tab, Tabs, useMediaQuery, useTheme } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import FeatureMenuCard from "../atoms/FeatureMenuCard";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Constant from "../../constant/Constant";
import grey from "@material-ui/core/colors/grey";
import { DISHES, INGREDIENT_MAP, INGREDIENTS } from "../../assets/dishes";

const useStyles = makeStyles({
  tabVertical: {
    display: "flex",
    height: 320,
    width: 240,
  },
  tabHorizontal: {
    backgroundColor: Constant.COLOR_PRIMARY_LIGHT_TRANS,
  },
  tab: {
    alignItems: "flex-start",
    fontWeight: 600,
  },
  tabSelected: {
    color: Constant.COLOR_PRIMARY,
  },
  tabIndicator: {
    right: "auto",
    left: 0,
    zIndex: 1,
  },
  textColorInherit: {
    borderLeft: `2px solid ${grey[300]}`,
  },
});
const ingredients = INGREDIENTS;

const DishPanel = ({ ingredient }: { ingredient: string }) => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const numDish = isSmDown ? 4 : 3;
  let dishes = INGREDIENT_MAP.get(ingredient);
  if (!dishes) {
    dishes = DISHES.slice(0, numDish);
  } else if (dishes.length > numDish) {
    dishes = dishes.slice(0, numDish);
  }
  return (
    <Grid
      container
      justify="center"
      spacing={3}
      style={{ height: "100%" }}
      alignItems="center"
    >
      {dishes.map((dish) => (
        <Grid item sm={4} xs={6} container justify="center" key={dish.id}>
          <FeatureMenuCard
            image={`${process.env.PUBLIC_URL}/img/dishes/${ingredient}/${dish.image}.jpg`}
            name={dish.vnName}
            price={dish.price}
          />
        </Grid>
      ))}
    </Grid>
  );
};

const FeatureMenu: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const [value, setValue] = React.useState<number>(0);
  const handleChange = (
    event: React.ChangeEvent<unknown>,
    newValue: number
  ) => {
    setValue(newValue);
  };
  return (
    <Box display={isSmDown ? "block" : "flex"}>
      <Box
        className={isSmDown ? classes.tabHorizontal : classes.tabVertical}
        mb={isSmDown ? 3 : 0}
      >
        <Tabs
          orientation={isSmDown ? "horizontal" : "vertical"}
          variant="scrollable"
          value={value}
          onChange={handleChange}
          scrollButtons="auto"
          classes={{ indicator: isSmDown ? undefined : classes.tabIndicator }}
          indicatorColor="primary"
        >
          {ingredients.map((item) => (
            <Tab
              key={item.value}
              label={`Món ${item.name}`}
              style={{ width: isSmDown ? "auto" : 240 }}
              classes={{
                wrapper: classes.tab,
                selected: classes.tabSelected,
                textColorInherit: isSmDown
                  ? undefined
                  : classes.textColorInherit,
              }}
            />
          ))}
        </Tabs>
      </Box>
      <Box flexGrow={1}>
        <DishPanel ingredient={ingredients[value].value} />
      </Box>
    </Box>
  );
};

export default FeatureMenu;
