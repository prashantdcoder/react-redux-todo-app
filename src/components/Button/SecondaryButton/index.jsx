import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import React from "react";
import BaseButton from "../BaseButton";

const useStyles = makeStyles({
  enabledBackground: {
    background: "#cf0c0cc7",
    color: "#fff",

    "&:hover": {
      color: "#fff",
      background: "#cf0c0cc7",
    },
  },

  disabledBackground: {
    background: "#ccc",
  },
});

const SecondaryButton = (props) => {
  const classes = useStyles();
  const { icon, disabled, onClickHandler } = props;
  return (
    <BaseButton
      classes={classes}
      icon={icon}
      disabled={disabled}
      onClickHandler={onClickHandler}
    />
  );
};

SecondaryButton.defaultProps = {
  disabled: false,
};

SecondaryButton.propTypes = {
  icon: PropTypes.any.isRequired,
  onClickHandler: PropTypes.func,
  disabled: PropTypes.bool,
};
export default SecondaryButton;
