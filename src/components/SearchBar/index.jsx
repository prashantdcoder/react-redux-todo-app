import { TextField } from "@mui/material";
import React from "react";

const SearchBar = (props) => {
  const { onSearchHandler } = props;
  return (
    <div>
      <TextField size="small" label="Search" onChange={onSearchHandler} />
    </div>
  );
};

export default SearchBar;
