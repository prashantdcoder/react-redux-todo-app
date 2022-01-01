import { TextareaAutosize } from "@material-ui/core";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions/action";
import "./style.css";

const CreateDialog = (props) => {
  const { open, handleClose } = props;
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    title: "",
    content: "The text-overflow property specifies how overflowed content that is not displayed should be signaled to the user. It can be clipped, display an ellipsis (...), or display a custom string.",
    isValid: true,
  });

  const onSubmitHandler = () => {
    dispatch(addTask(form));
    handleClose();
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Task</DialogTitle>
      <DialogContent>
        <DialogContentText>What are you doing today?</DialogContentText>
        <div className="create-dialog-container">
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="email"
            variant="outlined"
            onBlur={(e) => {
              setForm({
                ...form,
                title: e.target.value,
                isValid: e.target.value.length !== 0,
              });
            }}
          />
          <TextareaAutosize
            aria-label="Please explain it in brief"
            placeholder="Please explain it in brief"
            onBlur={(e) => {
              setForm({
                ...form,
                content: e.target.value,
                isValid: e.target.value.length !== 0,
              });
            }}
            style={{
              width: 540,
              height: 48,
              padding: "13px 16px",
              border: "1px solid #c4c4c4",
            }}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button style={{ color: "#ad0505" }} onClick={handleClose}>
          Cancel
        </Button>
        <Button disabled={!form.isValid} onClick={onSubmitHandler}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateDialog;
