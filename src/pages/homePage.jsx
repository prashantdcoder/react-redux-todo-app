import React from "react";
import AddTodo from "../components/AddTodo";
import "./style.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <AddTodo />
    </div>
  );
};

export default HomePage;
