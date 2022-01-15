import { ThumbsUpDown, ThumbUpSharp } from "@mui/icons-material";
import Checkbox from "@mui/material/Checkbox";
import React from "react";
import { ColorPalette } from "../../pages/homePage";
import DeleteButton from "../Buttons/DeleteButton";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Tooltip } from "@material-ui/core";
const TodoListItem = () => {
  return (
    <div className="item-container border-left-blue">
      <div className="item width_20_percent width-checkbox">
        <Checkbox
          defaultChecked
          sx={{
            color: ColorPalette.lightMaroon,
            "&.Mui-checked": {
              color: ColorPalette.pink,
            },
          }}
        />
      </div>
      <div className="item justify_column width-data">
        <Tooltip
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        >
          <span className="task">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </Tooltip>

        <div className="date">
          <span>
            <CalendarTodayIcon style={{ fontSize: 14 }} />
          </span>
          <span>14 Jan 2021</span>
        </div>
      </div>
      <div className="item width_20_percent delete-btn-padding">
        <DeleteButton />
      </div>
    </div>
  );
};

export default TodoListItem;
