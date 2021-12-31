import Fab from "@mui/material/Fab";
import PropTypes from "prop-types";
import React from "react";

const BaseButton = (props) => {
  const { icon, disabled, onClickHandler, classes } = props;
  return (
    <Fab
      disabled={disabled}
      className={`${classes.enabledBackground} ${
        disabled && classes.disabledBackground
      }`}
      onClick={onClickHandler}
    >
      {icon}
    </Fab>
  );
};

BaseButton.defaultProps = {
  title: "Button",
  disabled: false,
};

BaseButton.propTypes = {
  icon: PropTypes.any.isRequired,
  onClickHandler: PropTypes.func,
  disabled: PropTypes.bool,
};
export default BaseButton;
