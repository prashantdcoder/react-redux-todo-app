import PropTypes from "prop-types";
import React from "react";
import { CommonStyles } from "../../../utils/appUtils";
import PrimaryButton from "../PrimaryButton";

const ModalButton = (props) => {
  const { title, onClickHandler } = props;
  const styles = {
    color: CommonStyles.color.white,
    backgroundColor: "transparent",
    border: "1px solid #ccc",
    height: 48,
    fontFamily: ["Saira Condensed", "sans-serif"].join(","),
  };
  return (
    <PrimaryButton
      onClickHandler={onClickHandler}
      title={title}
      styles={styles}
    />
  );
};

ModalButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func,
};

export default ModalButton;
