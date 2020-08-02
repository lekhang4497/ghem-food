import React from "react";
import Grid from "@material-ui/core/Grid";
import {
  Button,
  Container,
  Link,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Constant from "../constant/Constant";
import ReasonCard from "./ReasonCard";

const useStyles = makeStyles({
  root: {
    background: `linear-gradient(45deg, ${Constant.BUTTON_GRADIENT_START}, ${Constant.BUTTON_GRADIENT_END})`,
    border: 0,
    color: "white",
    fontWeight: "bold",
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 12,
    paddingBottom: 12,
    textTransform: "none",
  },
  title: {
    fontFamily: "Open Sans",
    fontWeight: "bold",
    color: Constant.TEXT_DARK,
  },
  ghemText: {
    color: Constant.COLOR_PRIMARY,
    fontFamily: "Lobster Two",
    fontStyle: "italic",
    fontWeight: "normal",
  },
  titleImg: {
    borderRadius: "50%",
    maxWidth: "100%",
    background:
      'url("http://www.ghemsaigon.com/assets/images/food/1.jpg") 50% 50% no-repeat',
      backgroundSize:"100%",
    width: "100%",
    paddingBottom: "100%",
    backgroundColor: Constant.COLOR_PRIMARY,
    // borderColor: Constant.COLOR_PRIMARY_LIGHT,
    // borderWidth: 16,
    // borderStyle: "solid",
  },
  titleImgWrapper: {
    borderColor: Constant.COLOR_PRIMARY_LIGHT,
    borderWidth: 16,
    borderStyle: "solid",
  },
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
  menuItem: {
    fontWeight: "bold",
    color: "#757575",
    "&:hover": {
      color: "#424242",
      textDecoration: "none",
    },
  },
  coverGradient: {
    background: `linear-gradient(135deg, ${Constant.COLOR_PRIMARY_LIGHT}, #fff, #fff)`,
  },
  tabs: {
    overflow: "initial",
    // width: "30%",
  },
  tabWrapper: {
    flexGrow: 1,
    display: "flex",
    height: 224,
  },
  tab: {
    alignItems: "flex-start",
    fontWeight: "bold",
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

function a11yProps(index: any) {
  return {
    // classes: [{ textAlign: "left" }],
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

const IntroductionSection = () => {
  const classes = useStyles();
  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();

  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box className={classes.coverGradient}>
        <Box mb={8}>
          <Container maxWidth="md">
            <Box py={4}>
              <Grid container justify="flex-end">
                <Grid item md={6} container justify="flex-start">
                  {/* Logo */}
                  <Box className={classes.ghemText} fontSize={48}>
                    Ghém
                  </Box>
                </Grid>
                <Grid item md={6} container alignItems="center">
                  {/* Menu items*/}
                  <Grid container spacing={6} justify="flex-end">
                    <Grid item>
                      <Link
                        className={classes.menuItem}
                        href="#"
                        onClick={preventDefault}
                      >
                        Home
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link
                        className={classes.menuItem}
                        href="#"
                        onClick={preventDefault}
                      >
                        Menu
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>

        <Box pb={8}>
          <Container maxWidth="md">
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Box flexDirection="column" justifyContent="center" height="100%" display="flex">
                  <Typography
                    className={classes.title}
                    variant="h3"
                    gutterBottom
                    align="left"
                  >
                    All in Good taste food with{" "}
                    <span className={classes.ghemText}>Ghém</span>
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom align="left">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quos blanditiis tenetur abc abc
                  </Typography>
                  <Box mt={4}>
                    <Button className={classes.root}>See our menu</Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6} container justify="flex-end">
                <Box
                  border={16}
                  width="80%"
                  borderRadius={"50%"}
                  borderColor={Constant.COLOR_PRIMARY_LIGHT}
                >
                  <div className={classes.titleImg} />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>

        <Box mb={16}>
      <Container maxWidth="md">
        <Box my={6}>
          <Typography className={classes.title} variant="h5" gutterBottom>
            Why choose us
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {[1, 2, 3].map((value) => (
            <Grid item xs={4} key={value}>
              <ReasonCard />
            </Grid>
          ))}
        </Grid>
      </Container>
        </Box>


      <Container maxWidth="md">
        <Box my={6}>
          <Typography className={classes.title} variant="h5" gutterBottom>
            Our Menu
          </Typography>
        </Box>
        <Box display={"flex"}>
          <Box>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              className={classes.tabs}
              classes={{ indicator: classes.tabIndicator }}
              indicatorColor="primary"
            >
              <Tab
                label="Breakfast"
                {...a11yProps(0)}
                classes={{
                  wrapper: classes.tab,
                  selected: classes.tabSelected,
                }}
              />
              <Tab
                label="Lunch"
                {...a11yProps(1)}
                classes={{ wrapper: classes.tab }}
              />
              <Tab
                label="Dinner"
                {...a11yProps(1)}
                classes={{ wrapper: classes.tab }}
              />
              <Tab
                label="Dessert"
                {...a11yProps(1)}
                classes={{ wrapper: classes.tab }}
              />
            </Tabs>
          </Box>
          <Box flexGrow={1} px={4}>
            <TabPanel value={value} index={0}>
              <Grid container justify="center" spacing={2}>
                {[1, 2, 3].map((value) => (
                  <Grid item md={4} container justify="center">
                    <Box
                      bgcolor={Constant.COLOR_PRIMARY_LIGHT_TRANS}
                      p={2}
                      borderRadius={5}
                      width="100%"
                    >
                      <Box mb={3}>
                        <div className={classes.featureImg} />
                      </Box>
                      <Box mb={1} fontWeight="bold" color={Constant.TEXT_DARK}>
                        Various Menu
                      </Box>
                      <Box fontWeight="bold" color={Constant.COLOR_PRIMARY}>
                        $100
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default IntroductionSection;
