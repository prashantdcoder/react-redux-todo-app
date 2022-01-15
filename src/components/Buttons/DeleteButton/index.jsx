import React from "react";
import TodoButton from "../TodoButton";

const colorPlate = {
  black: "#0e1424",
  gray: "#4e4e50",
  darkMaroon: "#6f2232",
  lightMaroon: "#950740",
  pink: "#c3073f",
  white: "#fff",
};
const DeleteButton = () => {
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
  return <TodoButton title="Delete" styles={styles} />;
};

export default DeleteButton;
