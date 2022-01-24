import { Tooltip } from "@material-ui/core";
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import React from "react";
import { ColorPalette } from "../../pages/homePage";
import SecondaryButton from "../Buttons/SecondaryButton";

const styles = {
  chipRoot: {
    fontFamily: `'Saira Condensed', sans-serif !important`,
    fontSize: 14,
    background: "#948b8bb8 !important",
    color: "#fff !important",
    width: 85,
  },
};

const TodoListItem = (props) => {
  const { classes } = props;
  return (
    <div className="item-container border-left-blue">
      <div className="item width_20_percent width-checkbox">
        <Checkbox
          defaultChecked
          sx={{
            color: ColorPalette.lightMaroon,
            "&.Mui-checked": {
              color: ColorPalette.pink,
            },
          }}
        />
      </div>
      <div className="item justify_column width-data">
        <Tooltip
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        >
          <span className="task">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </Tooltip>

        <div className="date">
          <Chip className={classes.chipRoot} label="High Priority" />
        </div>
      </div>
      <div className="item width_20_percent delete-btn-padding">
        <SecondaryButton />
      </div>
    </div>
  );
};

TodoListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TodoListItem);
