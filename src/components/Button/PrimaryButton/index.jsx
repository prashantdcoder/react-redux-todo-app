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
  const { title, disabled, onClickHandler } = props;
  return (
    <BaseButton
      classes={classes}
      title={title}
      disabled={disabled}
      onClickHandler={onClickHandler}
    />
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
