import AddIcon from "@mui/icons-material/Add";
import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../redux/actions/action";
import PrimaryButton from "../Button/PrimaryButton";
import "./style.css";

export default function Todo() {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const { todoList } = useSelector((state) => state.taskReducer);

  const onClickAddTaskHandler = () => {
    dispatch(addTask(task));
    setTask("");
    setIsDisabled(true);
  };

  const onChangeHandler = (event) => {
    const { value } = event.target;
    if (value.length !== 0) {
      setIsDisabled(false);
      setTask(value);
    } else {
      setIsDisabled(true);
      setTask("");
    }
  };

  useEffect(() => {
    console.log("Updated task list", todoList);
  }, [todoList]);

  return (
    <div className="todo-container">
      <TextField
        className="add-input-field"
        id="outlined-basic"
        label="What are you doing today?"
        variant="outlined"
        value={task}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onClickAddTaskHandler();
          }
        }}
        onChange={onChangeHandler}
      />
      <PrimaryButton
        icon={<AddIcon />}
        disabled={isDisabled}
        onClickHandler={onClickAddTaskHandler}
      />
    </div>
  );
}
