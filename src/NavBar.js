import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
    position: 'absolute',
    zIndex: '100',
    color: 'white'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  NavBarList:{
    "& a":{
      display: "inline-block",
      width: "100%",
      padding: "5% 0",
      textDecoration: "none",
      color: "#000000",
      position: "relative",
      transition: "all 400ms ease-in-out",
      "& span": {
        position: "relative",
        zIndex: "100"
      },
      "&:after": {
        position: "absolute",
        content: "''",
        width: "0%",
        height: "100%",
        background: "#000000",
        top: "0",
        left: "0",
        zIndex: "90",
        transition: "all 400ms ease-in-out",
      },
      "&:hover":{
        color: "#FFFFFF",
        "&:after": {
          width: "100%",
        },
      }
    }
  },
});

class NavBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };
  
  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render(){
    const { open } = this.state;
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />

        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={this.handleDrawerOpen}
          className={classNames(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <div className={classes.NavBarList}>
            <a href="#intro"><span>Introduction</span></a>
            <a href="#work"><span>Work</span></a>
            <a href="#skills"><span>Skills</span></a>
            <a href="#websites"><span>Previous Works</span></a>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NavBar);