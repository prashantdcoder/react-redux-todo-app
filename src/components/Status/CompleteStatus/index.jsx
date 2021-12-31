import { makeStyles } from "@material-ui/styles";
import Chip from "@mui/material/Chip";
import React from "react";

const useStyles = makeStyles({
  chipBackground: {
    background: "orange",
    color: "#fff",

    "&:hover": {
      color: "#fff",
      background: "orange",
    },
  },

  disabledBackground: {
    background: "#ccc",
  },
});

export default function CompleteStatus(props) {
  const classes = useStyles();
  return (
    <Chip
      className={classes.chipBackground}
      label="Completed"
      color="primary"
    />
  );
}
