import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import PrimaryButton from "../Button/PrimaryButton";
import SecondaryButton from "../Button/SecondaryButton";

const TodoListitem = (props) => {
  const { id, title, status, dateCreated } = props.todo;
  return (
    <div className="list-item-container">
      <div className="item-col width-30 title-container">
        <span>{title}</span>
        <span>{dateCreated}</span>
      </div>
      <div className="item-col width-30">{status}</div>
      <div className="item-col width-40">
        <PrimaryButton title="Edit" />
        <SecondaryButton title="Delete" />
      </div>
    </div>
  );
};

TodoListitem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoListitem;
