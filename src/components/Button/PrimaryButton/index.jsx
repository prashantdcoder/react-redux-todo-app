import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import React from "react";
import BaseButton from "../BaseButton";

const useStyles = makeStyles({
  enabledBackground: {
    background: "#1976d2",
    color: "#fff",

    "&:hover": {
      color: "#fff",
      background: "#1976d2",
    },
  },

  disabledBackground: {
    background: "#ccc",
  },
});

const PrimaryButton = (props) => {
  const classes = useStyles();
  const { icon, onClickHandler, disabled } = props;
  return (
    <BaseButton
      disabled={disabled}
      classes={classes}
      icon={icon}
      onClickHandler={onClickHandler}
    />
  );
};

PrimaryButton.propTypes = {
  icon: PropTypes.any.isRequired,
  onClickHandler: PropTypes.func,
};
export default PrimaryButton;
