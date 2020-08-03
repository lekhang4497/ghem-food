import Box from "@material-ui/core/Box";
import { Tab, Tabs } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import MenuCard from "./MenuCard";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Constant from "../constant/Constant";

const useStyles = makeStyles({
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
  },
});

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index } = props;

  return <div>{value === index && <Box>{children}</Box>}</div>;
};

const menuTabs = ["Breakfast", "Lunch", "Dinner", "Dessert"];

const FeatureMenu = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box display={"flex"}>
      <Box flexGrow={1}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          classes={{ indicator: classes.tabIndicator }}
          indicatorColor="primary"
        >
          {menuTabs.map((value) => (
            <Tab
              key={value}
              label={value}
              classes={{
                wrapper: classes.tab,
                selected: classes.tabSelected,
              }}
            />
          ))}
        </Tabs>
      </Box>
      <Box flexGrow={1} px={4}>
        <TabPanel value={value} index={0}>
          <Grid container justify="center" spacing={2}>
            {[1, 2, 3].map((value) => (
              <Grid item md={4} container justify="center">
                <MenuCard />
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
      </Box>
    </Box>
  );
};

export default FeatureMenu;
