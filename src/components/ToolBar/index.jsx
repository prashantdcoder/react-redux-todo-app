import React from "react";
import { useDispatch } from "react-redux";
import { searchTask } from "../../redux/actions/action";
import { convertToLowerCase } from "../../utils/appUtils";
import SearchBar from "../SearchBar";
import "./istyle.css";

const ToolBar = () => {
  const dispatch = useDispatch();
  const onSearchHandler = (event) => {
    dispatch(searchTask(convertToLowerCase(event.target.value)));
  };

  return (
    <div className="toolbar-container">
      <SearchBar onSearchHandler={onSearchHandler} />
    </div>
  );
};

export default ToolBar;
