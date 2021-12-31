import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
const SortMenu = (props) => {
  const { open, onHandleOpenMenu, onHandleCloseMenu, anchorEl } = props;
  return (
    <div>
      <Button variant="contained" id="basic-button" onClick={onHandleOpenMenu}>
        Sort By Title
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => onHandleCloseMenu("asc")}>Ascending</MenuItem>
        <MenuItem onClick={() => onHandleCloseMenu("desc")}>
          Descending
        </MenuItem>
        <MenuItem onClick={onHandleCloseMenu}></MenuItem>
      </Menu>
    </div>
  );
};

export default SortMenu;
