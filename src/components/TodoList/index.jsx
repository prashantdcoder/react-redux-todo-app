import React from "react";
import { useSelector } from "react-redux";
import TodoListitem from "../TodoListItem";
import "./style.css";

export default function TodoList() {
  const { filteredTodoList } = useSelector((state) => state.taskReducer);
  const todoListItem = filteredTodoList.map((item) => <TodoListitem key={item.id} todo={item} />);
  return <div className="list-container">{todoListItem}</div>;
}
