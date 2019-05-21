import React, {useState} from "react";

import PropTypes from "prop-types";

import { AppBar, Toolbar, IconButton, Typography, Badge, MenuItem, Menu } from '@material-ui/core'

import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";

import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Chat_bubble from "@material-ui/icons/ChatBubbleRounded"
import SettingsIcon from "@material-ui/icons/Settings";

import '../../css/navigation.css'

const styles = theme => ({
  root: {
    width: "100%",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  hi: {
    color: "#C10909",
    padding: "10px 2px 0px 13px",
    backgroundColor: "#FFF",
    borderRadius: "5px",
  },
  title: {
    display: "none",
    fontWeight: "bold",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto",
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
});

const TopBar = props =>{
 
  let[myHandleProfileMenuOpen, setMyHandleProfileMenuOpen] = useState("")
  let[myHandleMenuClose, setHandleMenuClose] = useState("")
  let[myHndleMobileMenuClose, setHandleMobileMenuClose] = useState("")
  
    const { anchorEl, mobileMoreAnchorEl } = useState();
    const { classes } = props;
     const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={(e) =>{
          setHandleMenuClose(e.target.value)}
        }
      >
        <MenuItem onClick={(e) =>{
          setHandleMenuClose(e.target.value)}
          }>
          Profile
          </MenuItem>
        <MenuItem onClick={(e) =>{
          setHandleMenuClose(e.target.value)}
          }>
          My account
          </MenuItem>
      </Menu>
    );
    return (
      <div className={`${classes.root} nav-bar`}>
        <AppBar color='primary' position="static" style={{ height: '100px', background: 'transparent', boxShadow: 'none'}}>
          <Toolbar className='container'style={{ paddingTop: '30px', height: '100px'}}>
            <Typography className={classes.title} variant="h4" color="inherit" noWrap style={{ paddingTop: '30px', height: '100px'}}>
              <span className={classes.hi}>hi</span>RED
            </Typography>
            
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
            <IconButton
                aria-owns={isMenuOpen ? "material-appbar" : undefined}
                aria-haspopup="true"
                onClick={(e) => {
                  setMyHandleProfileMenuOpen(e.target.value)}
                }
                style={{ fontSize:' 30px '}}
                color="inherit"
              >
                <AccountCircle />
            </IconButton>
            <IconButton color="inherit" style={{ fontSize: '30px' }}>
              <Badge badgeContent={4} color="secondary">
                <Chat_bubble/>
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <SettingsIcon />
            </IconButton>
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
      </div>
    );
  }


TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopBar);