import React from "react";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  redBackground: {
    background: "#1976d2",
    color: "#fff",

    "&:hover": {
      color: "#fff",
      background: "#1976d2",
    },
  },

  grayBackground: {
    background: "#ccc",
  },
});

const PrimaryButton = (props) => {
  const classes = useStyles();
  const { title, disabled, onClickHandler } = props;
  return (
    <Button
      disabled={disabled}
      className={`${classes.redBackground} ${
        disabled && classes.grayBackground
      }`}
      onClick={onClickHandler}
    >
      {title}
    </Button>
  );
};

PrimaryButton.defaultProps = {
  title: "Button",
  disabled: false,
};

PrimaryButton.propTypes = {
  title: PropTypes.string,
  onClickHandler: PropTypes.func,
  disabled: PropTypes.bool,
};
export default PrimaryButton;
