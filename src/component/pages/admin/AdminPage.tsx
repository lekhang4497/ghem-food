import React, { FC } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import {
  Link as RouterLink,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";
import {
  faList,
  faPlus,
  faSignOutAlt, faTruck, faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "@material-ui/core";
import AdminBooking from "./AdminBooking";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const AdminPage: FC = () => {
  const { logout } = useAuth0();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const classes = useStyles();
  const { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Box display="flex" justifyContent="center" alignItems="center" p={5}>
        <img
          src={process.env.PUBLIC_URL + "/img/logo.png"}
          style={{ maxWidth: "100%" }}
        />
      </Box>
      <Divider />
      <List>
        <ListItem button component={RouterLink} to={`${url}/booking`}>
          <ListItemIcon>
            <FontAwesomeIcon icon={faUtensils} />
          </ListItemIcon>
          <ListItemText primary="Bàn được đặt" />
        </ListItem>
        <ListItem button component={RouterLink} to={`${url}/delivery`}>
          <ListItemIcon>
            <FontAwesomeIcon icon={faTruck} />
          </ListItemIcon>
          <ListItemText primary="Đơn đặt món" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={() => logout()}>
          <ListItemIcon>
            <FontAwesomeIcon icon={faSignOutAlt} />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
        color="primary"
        variant="outlined"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <FontAwesomeIcon icon={faList} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path={path}>
            <div>Welcome to admin</div>
          </Route>
          <Route path={`${path}/booking`}>
            <AdminBooking/>
          </Route>
          <Route path={`${path}/delivery`}>
            <div>delivery</div>
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default AdminPage;
