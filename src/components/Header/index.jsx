import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import React from "react";
import { CommonStyles } from "../../utils/appUtils";

const styles = {
  appBarRoot: {
    background: "linear-gradient(80deg, #c43a3f 30%, #950740 50%)",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
  },
  typographyRoot: {
    fontFamily: `'Saira Condensed', sans-serif !important`,
  },
};

const Header = (props) => {
  const { classes } = props;
  return (
    <AppBar className={classes.appBarRoot} position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          className={classes.typographyRoot}
        >
          Simple Todo Application
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
