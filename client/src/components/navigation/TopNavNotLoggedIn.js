import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginForm from "../login/LoginForm";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function TopNavNotLoggedIn() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon onClick={handleClick} />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem component={Link} to="/" onClick={handleClose}>
              Home
            </MenuItem>
            <MenuItem component={Link} to="/chatbot/" onClick={handleClose}>
              Chat
            </MenuItem>
            <MenuItem component={Link} to="/profile/" onClick={handleClose}>
              Profile
            </MenuItem>
            <MenuItem component={Link} to="/mentors/" onClick={handleClose}>
              Mentors
            </MenuItem>
            <MenuItem component={Link} to="/signup/" onClick={handleClose}>
              Signup
            </MenuItem>
            <MenuItem component={Link} to="/login/" onClick={handleClose}>
              Login
            </MenuItem>
          </Menu>
          <Typography variant="h6" className={classes.title}>
            hiRED
          </Typography>
          {/* <AccountCircle /> */}
          <LoginForm />
        </Toolbar>
      </AppBar>
    </div>
  );
}
