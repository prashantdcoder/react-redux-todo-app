import React from "react";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  redBackground: {
    background: "#ff000cbf",
    color: "#fff",

    "&:hover": {
      color: "#fff",
      background: "#ff000cbf",
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
      className={`${classes.redBackground} ${disabled && classes.grayBackground}`}
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
