import PropTypes from "prop-types";
import React from "react";
import PrimaryButton from "../PrimaryButton";

const colorPlate = {
  black: "#0e1424",
  gray: "#4e4e50",
  darkMaroon: "#6f2232",
  lightMaroon: "#950740",
  pink: "#c3073f",
  white: "#fff",
};
const SecondaryButton = (props) => {
  const { title, clickHandler } = props;
  const styles = {
    color: colorPlate.white,
    backgroundColor: colorPlate.lightMaroon,
    height: 48,
    fontFamily: ["Saira Condensed", "sans-serif"].join(","),
    "&:hover": {
      color: colorPlate.white,
      backgroundColor: colorPlate.pink,
    },
  };
  return <PrimaryButton title={title} onClickHandler={clickHandler} styles={styles} />;
};

SecondaryButton.defaultProps = {
  title: "Delete",
};

SecondaryButton.propTypes = {
  title: PropTypes.string,
  clickHandler: PropTypes.func,
};

export default SecondaryButton;
