import React from "react";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";

const BaseButton = (props) => {
  const { title, disabled, onClickHandler, classes } = props;
  return (
    <Button
      disabled={disabled}
      className={`${classes.enabledBackground} ${
        disabled && classes.disabledBackground
      }`}
      onClick={onClickHandler}
    >
      {title}
    </Button>
  );
};

BaseButton.defaultProps = {
  title: "Button",
  disabled: false,
};

BaseButton.propTypes = {
  title: PropTypes.string,
  onClickHandler: PropTypes.func,
  disabled: PropTypes.bool,
};
export default BaseButton;
