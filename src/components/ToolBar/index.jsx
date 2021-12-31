import React from "react";
import { useDispatch } from "react-redux";
import { searchTask, sortByAsc, sortByDsc } from "../../redux/actions/action";
import { convertToLowerCase } from "../../utils/appUtils";
import FilterMenu from "../FilterMenu";
import SearchBar from "../SearchBar";
import SortMenu from "../SortMenu";
import "./istyle.css";

const ToolBar = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const onHandleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onHandleCloseMenu = (sort) => {
    if (sort === "asc") {
      dispatch(sortByAsc());
    } else {
      dispatch(sortByDsc());
    }
    setAnchorEl(null);
  };

  const onSearchHandler = (event) => {
    dispatch(searchTask(convertToLowerCase(event.target.value)));
  };

  return (
    <div className="toolbar-container justify-content">
      <SearchBar onSearchHandler={onSearchHandler} />
      <SortMenu
        open={open}
        onHandleOpenMenu={onHandleOpenMenu}
        onHandleCloseMenu={onHandleCloseMenu}
        anchorEl={anchorEl}
      />
      <FilterMenu />
    </div>
  );
};

export default ToolBar;
