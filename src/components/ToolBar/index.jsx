import AddIcon from "@mui/icons-material/Add";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  paginateTask,
  searchTask,
  sortByAsc,
  sortByDsc,
} from "../../redux/actions/action";
import { convertToLowerCase } from "../../utils/appUtils";
import PrimaryButton from "../Button/PrimaryButton";
import CreateDialog from "../CreateDialog";
import FilterMenu from "../FilterMenu";
import SearchBar from "../SearchBar";
import SortMenu from "../SortMenu";
import "./istyle.css";

const ToolBar = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { todoList } = useSelector((state) => state.taskReducer);
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  useEffect(() => {
    console.log("Updated task list", todoList);
  }, [todoList]);

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
      <div>
        <PrimaryButton icon={<AddIcon />} onClickHandler={handleClickOpen} />
        <CreateDialog
          isEdit={false}
          open={openDialog}
          handleClose={handleClose}
        />
      </div>

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
