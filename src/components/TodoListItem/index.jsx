import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Chip from "@mui/material/Chip";
import PropTypes from "prop-types";
import React from "react";
import PrimaryButton from "../Button/PrimaryButton";
import SecondaryButton from "../Button/SecondaryButton";
import ActiveStatus from "../Status/ActiveStatus";
import CompleteStatus from "../Status/CompleteStatus";
import "./style.css";

const TodoListitem = (props) => {
  const { id, title, status, dateCreated } = props.todo;
  return (
    <div className="list-item-container">
      <div className="item-col width-30 title-container">
        <span>{title}</span>
        <span>{dateCreated}</span>
      </div>
      <div className="item-col width-30">
        <ActiveStatus status={status} />
      </div>
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
