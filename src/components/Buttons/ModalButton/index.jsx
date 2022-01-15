import PropTypes from "prop-types";
import React from "react";
import { CommonStyles } from "../../../utils/appUtils";
import TodoButton from "../TodoButton";

const ModalButton = (props) => {
  const { title } = props;
  const styles = {
    color: CommonStyles.color.white,
    backgroundColor: "transparent",
    border: "1px solid #ccc",
    height: 48,
    fontFamily: ["Saira Condensed", "sans-serif"].join(","),
  };
  return <TodoButton title={title} styles={styles} />;
};

ModalButton.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ModalButton;
