import React, {useState} from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import Chat_bubble from "@material-ui/icons/ChatBubbleRounded"
import SettingsIcon from "@material-ui/icons/Settings";
import MoreIcon from "@material-ui/icons/MoreVert";

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
    color: "#D50000",
    paddingRight: "2px",
    paddingLeft: "2px",
    backgroundColor: "white"
  },
  title: {
    display: "none",
    backgroundColor: "#D50000",
    paddingRight: "2px",
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
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
});

const TopBar = props =>{
  // state = {
  //   anchorEl: null,
  //   mobileMoreAnchorEl: null,
  // };
  
  let[myHandleProfileMenuOpen, setMyHandleProfileMenuOpen] = useState("")
  let[myHandleMenuClose, setHandleMenuClose] = useState("")
  let[myHndleMobileMenuClose, setHandleMobileMenuClose] = useState("")
  // handleMenuClose = () => {
  //   setState({ anchorEl: null });
  //   handleMobileMenuClose();
  // };

  // handleMobileMenuOpen = event => {
  //   setState({ mobileMoreAnchorEl: event.currentTarget });
  // };

  // handleMobileMenuClose = () => {
  //   setState({ mobileMoreAnchorEl: null });
  // };

  
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
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h4" color="inherit" noWrap>
              <span className={classes.hi}>hi</span>RED
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
            <IconButton
                aria-owns={isMenuOpen ? "material-appbar" : undefined}
                aria-haspopup="true"
                onClick={(e) => {
                  setMyHandleProfileMenuOpen(e.target.value)}
                }
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <Chat_bubble/>
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                  <SettingsIcon />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton 
                aria-haspopup="true" 
                onClick={(e) => {
                  setMyHandleProfileMenuOpen(e.target.value)}
                } 
                color="inherit">
                <MoreIcon />
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