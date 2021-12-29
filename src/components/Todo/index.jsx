import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../redux/actions/action";
import PrimaryButton from "../Button/PrimaryButton";
import "./style.css";

export default function Todo() {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const { taskList } = useSelector((state) => state.taskReducer);

  const onClickAddTaskHandler = () => {
    dispatch(addTask(task));
  };

  const onChangeHandler = (event) => {
    const { value } = event.target;
    if (value.length !== 0) {
      setIsDisabled(false);
      setTask(value);
    } else {
      setIsDisabled(true);
    }
  };

  useEffect(() => {
    console.log("Updated task list", taskList);
  }, [taskList]);

  return (
    <div className="todo-container">
      <TextField
        className="add-input-field"
        id="outlined-basic"
        label="Add Task"
        variant="outlined"
        onChange={onChangeHandler}
      />
      <PrimaryButton
        title="Add"
        disabled={isDisabled}
        onClickHandler={onClickAddTaskHandler}
      />
    </div>
  );
}
