import Box from "@material-ui/core/Box";
import {Tab, Tabs} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import FeatureMenuCard from "../atoms/FeatureMenuCard";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Constant from "../../constant/Constant";
import grey from "@material-ui/core/colors/grey";
import {DISHES, INGREDIENT_MAP, INGREDIENTS} from "../../assets/dishes";

const useStyles = makeStyles({
  root: {
    display: "flex",
    height: 320,
    width: 240,
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

const DishPanel = ({ingredient}: { ingredient: string }) => {
  let dishes = INGREDIENT_MAP.get(ingredient);
  if (!dishes || dishes.length < 3) {
    dishes = [DISHES[0], DISHES[1], DISHES[2]];
  } else {
    dishes = [dishes[0], dishes[1], dishes[2]];
  }
  return (
    <Grid
      container
      justify="center"
      spacing={4}
      style={{height: "100%"}}
      alignItems="center"
    >
      {dishes.map((dish) => (
        <Grid item sm={4} container justify="center" key={dish.id}>
          <FeatureMenuCard
            image={`${process.env.PUBLIC_URL}/img/dishes/${ingredient}/${dish.id}.jpg`}
            name={dish.vnName}
            price={dish.price}
          />
        </Grid>
      ))}
    </Grid>
  );
};

const FeatureMenu = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState<number>(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box display={"flex"}>
      <Box className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          classes={{indicator: classes.tabIndicator}}
          indicatorColor="primary"
        >
          {ingredients.map((item) => (
            <Tab
              key={item.value}
              label={`Món ${item.name}`}
              style={{width: 240}}
              classes={{
                wrapper: classes.tab,
                selected: classes.tabSelected,
                textColorInherit: classes.textColorInherit,
              }}
            />
          ))}
        </Tabs>
      </Box>
      <Box flexGrow={1}>
        <DishPanel ingredient={ingredients[value].value}/>
      </Box>
    </Box>
  );
};

export default FeatureMenu;
