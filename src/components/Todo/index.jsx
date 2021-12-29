import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { addTask } from "../../redux/actions/action";
import "./style.css";
import { Add } from "@mui/icons-material";

export default function Todo() {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const { taskList } = useSelector((state) => state.taskReducer);
  const onClickAddTaskHandler = () => {
    dispatch(addTask(task));
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
        onChange={(e) => setTask(e.target.value)}
      />
      <Button
        className="add-button"
        onClick={onClickAddTaskHandler}
      >
        Add
      </Button>
    </div>
  );
}
