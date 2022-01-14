import { makeStyles } from "@material-ui/core/styles";
import { InputBase } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import React from "react";

export const ColorPalette = {
  black: "#0e1424",
  gray: "#4e4e50",
  darkMaroon: "#6f2232",
  lightMaroon: "#950740",
  pink: "#c3073f",
  white: "#fff",
};

const useStyles = makeStyles((theme) => ({
  textField: {
    border: `1px solid ${ColorPalette.white}`,
    borderRadius: "2px",
    padding: "7px",
    width: '460px',
  },
  myButton: {
    border: `1px solid ${ColorPalette.white}`,
    padding: "30px",
  },
}));

const TodoButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  backgroundColor: ColorPalette.lightMaroon,
  height: 50,
  fontFamily: ["Saira Condensed", "sans-serif"].join(","),
  "&:hover": {
    backgroundColor: ColorPalette.pink,
  },
}));

const AddTodo = () => {
  const classes = useStyles();
  return (
    <div className="add-todo-container">
      <InputBase
        id="outlined-basic"
        label="Add today's task"
        variant="outlined"
        placeholder="Add today's task"
        className={classes.textField}
      />

      <TodoButton variant="contained">Add Task</TodoButton>
    </div>
  );
};

export default AddTodo;
