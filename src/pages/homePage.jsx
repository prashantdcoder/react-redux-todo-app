import React from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import "./style.css";

export const ColorPalette = {
  black: "#0e1424",
  gray: "#4e4e50",
  darkMaroon: "#6f2232",
  lightMaroon: "#950740",
  pink: "#c3073f",
  white: "#fff",
};
const HomePage = () => {
  return (
    <div className="home-container">
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default HomePage;
