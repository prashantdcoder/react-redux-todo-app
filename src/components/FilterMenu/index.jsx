import { Checkbox, Select } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import { makeStyles } from "@mui/styles";
import React from "react";

const names = ["Active", "Completed"];

const useStyles = makeStyles({
  inputHeight: {
    height: "38px",
    border: "none",
  },

  inputLabelRoot: {
    top: "-7px",
  },
});

const FilterMenu = (props) => {
  const classes = useStyles();
  const [filterName, setFilterName] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setFilterName(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <div>
      <FormControl sx={{ width: 170 }}>
        <InputLabel
          className={classes.inputLabelRoot}
          id="demo-multiple-checkbox-label"
        >
          Filter
        </InputLabel>
        <Select
          className={classes.inputHeight}
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(", ")}
          value={filterName}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={filterName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterMenu;
