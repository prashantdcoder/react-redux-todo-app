import React from "react";
import { useSelector } from "react-redux";
import TodoListitem from "../TodoListItem";
import "./style.css";

export default function TodoList() {
  const { todoList } = useSelector((state) => state.taskReducer);
  const todoListItem = todoList.map((item) => <TodoListitem key={item.id} todo={item} />);
  return <div className="list-container">{todoListItem}</div>;
}
