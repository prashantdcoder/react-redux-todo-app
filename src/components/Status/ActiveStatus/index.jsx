import { makeStyles } from "@material-ui/styles";
import Chip from "@mui/material/Chip";
import React from "react";

const useStyles = makeStyles({
  chipBackground: {
    background: "#2a782ad6",
    color: "#fff",

    "&:hover": {
      color: "#fff",
      background: "#2a782ad6",
    },
  },

  disabledBackground: {
    background: "#ccc",
  },
});

export default function ActiveStatus(props) {
  const { status } = props;
  const classes = useStyles();
  return (
    <Chip className={classes.chipBackground} label={status} color="primary" />
  );
}
