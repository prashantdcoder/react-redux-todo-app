import { TextareaAutosize } from "@material-ui/core";
import { Cancel, Save } from "@mui/icons-material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, editTask, paginateTask } from "../../redux/actions/action";
import PrimaryButton from "../Button/PrimaryButton";
import SecondaryButton from "../Button/SecondaryButton";
import "./style.css";
import PropTypes from "prop-types";

const CreateDialog = (props) => {
  const { open, handleClose, isEdit, formData } = props;
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    title: isEdit === true ? formData.title : "",
    content: isEdit === true ? formData.content : "",
    id: formData?.id,
  });
  const isFormValid = form.title.length !== 0 && form.content.length !== 0;
  const dialogHeading = isEdit ? "Edit Task" : "Add Task";
  const onSubmitHandler = () => {
    dispatch(addTask(form));
    dispatch(paginateTask());
    handleClose();
  };
  const onEditHandler = () => {
    dispatch(editTask(form));
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{dialogHeading}</DialogTitle>
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
            defaultValue={form.title}
            onBlur={(e) => {
              setForm({
                ...form,
                title: e.target.value,
              });
            }}
          />
          <TextareaAutosize
            aria-label="Please explain it in brief"
            placeholder="Please explain it in brief"
            defaultValue={form.content}
            onBlur={(e) => {
              setForm({
                ...form,
                content: e.target.value,
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
        <SecondaryButton icon={<Cancel />} onClickHandler={handleClose} />
        {isEdit ? (
          <PrimaryButton
            disabled={!isFormValid}
            icon={<Save />}
            onClickHandler={onEditHandler}
          />
        ) : (
          <PrimaryButton
            disabled={!isFormValid}
            icon={<Save />}
            onClickHandler={onSubmitHandler}
          />
        )}
      </DialogActions>
    </Dialog>
  );
};

CreateDialog.defaultProps = {
  isEdit: false,
};

CreateDialog.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  isEdit: PropTypes.bool,
  formData: PropTypes.object,
};

export default CreateDialog;
