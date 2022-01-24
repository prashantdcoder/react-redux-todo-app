import { makeStyles } from "@material-ui/core/styles";
import { InputBase } from "@mui/material";
import React from "react";
import { ColorPalette } from "../../pages/homePage";
import ModalButton from "../Buttons/ModalButton";
import PrimaryButton from "../Buttons/PrimaryButton";
import CategoryModal from "../CategoryModal";

const useStyles = makeStyles((theme) => ({
  textField: {
    border: `1px solid ${ColorPalette.gray}`,
    borderRadius: "2px",
    padding: "7px",
    width: "348px",
  },
  myButton: {
    padding: "30px",
  },
}));

const AddTodo = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("Dione");

  const handleClickListItem = () => {
    setOpen(true);
  };

  const handleClose = (newValue) => {
    setOpen(false);

    if (newValue) {
      setValue(newValue);
    }
  };

  return (
    <div className="add-todo-container">
      <div className="todo-textfield-container">
        <InputBase
          id="outlined-basic"
          label="Add today's task"
          placeholder="Add today's task"
          className={classes.textField}
        />
      </div>

      <div className="category-container">
        <ModalButton onClickHandler={handleClickListItem} title="Select Category" />
        <CategoryModal open={open} onClose={handleClose} value={value} />
      </div>

      <div className="btn-container">
        <PrimaryButton title="add task" />
      </div>
    </div>
  );
};

export default AddTodo;
