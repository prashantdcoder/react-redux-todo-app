import { makeStyles } from "@material-ui/core/styles";
import { Button, InputBase } from "@mui/material";
import React from "react";
import { ColorPalette } from "../../pages/homePage";
import ModalButton from "../Buttons/ModalButton";
import TodoButton from "../Buttons/TodoButton";

const useStyles = makeStyles((theme) => ({
  textField: {
    border: `1px solid ${ColorPalette.gray}`,
    borderRadius: "2px",
    padding: "7px",
    width: "348px",
  },
  myButton: {
    padding: "30px",
  },
}));

const AddTodo = () => {
  const classes = useStyles();
  return (
    <div className="add-todo-container">
      <div className="todo-textfield-container">
        <InputBase
          id="outlined-basic"
          label="Add today's task"
          placeholder="Add today's task"
          className={classes.textField}
        />
      </div>

      <div className="category-container">
        <ModalButton title="Select Category" />
      </div>

      <div className="btn-container">
        <TodoButton title="add task" />
      </div>
    </div>
  );
};

export default AddTodo;
