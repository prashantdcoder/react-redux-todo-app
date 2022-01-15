import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import React from "react";

const colorPlate = {
  black: "#0e1424",
  gray: "#4e4e50",
  darkMaroon: "#6f2232",
  lightMaroon: "#950740",
  pink: "#c3073f",
  white: "#fff",
};
const TodoButton = (props) => {
  const { title, styles } = props;
  const TaskButton = styled(Button)(({ theme }) => ({
    ...styles,
  }));

  return <TaskButton>{title}</TaskButton>;
};

TodoButton.defaultProps = {
  title: "Button",
  styles: {
    color: colorPlate.pink,
    backgroundColor: colorPlate.white,
    height: 50,
    fontFamily: ["Saira Condensed", "sans-serif"].join(","),
    "&:hover": {
      color: colorPlate.pink,
      backgroundColor: colorPlate.white,
    },
  },
};

TodoButton.propTypes = {
  title: PropTypes.string,
  styles: PropTypes.object,
};

export default TodoButton;
