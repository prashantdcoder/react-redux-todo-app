import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Checkbox from "@mui/material/Checkbox";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { markAsCompleted } from "../../redux/actions/action";
import PrimaryButton from "../Button/PrimaryButton";
import SecondaryButton from "../Button/SecondaryButton";
import ActiveStatus from "../Status/ActiveStatus";
import CompleteStatus from "../Status/CompleteStatus";
import "./style.css";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const statusList = {
  Active: <ActiveStatus />,
  Completed: <CompleteStatus />,
};
const TodoListitem = (props) => {
  const { id, title, status, dateCreated } = props.todo;
  const [isCheckboxDisabled, setIsCheckboxDisabled] = useState(false);
  const dispatch = useDispatch();
  const markAsCompletedHandler = (todoId) => {
    dispatch(markAsCompleted(todoId));
    setIsCheckboxDisabled(true);
  };

  return (
    <div className="list-item-container set-completed-container">
      <div className="item-col checkbox-container">
        <Checkbox
          {...label}
          disabled={isCheckboxDisabled}
          onChange={() => markAsCompletedHandler(id)}
        />
      </div>
      <div className="item-col width-30 title-container">
        <span>{title}</span>
        <span>{dateCreated}</span>
      </div>
      <div className="item-col width-30">{statusList[status]}</div>
      <div className="item-col width-40">
        <PrimaryButton icon={<EditIcon />} />
        <SecondaryButton icon={<DeleteIcon />} />
      </div>
    </div>
  );
};

TodoListitem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoListitem;
