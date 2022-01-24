import {
  createMuiTheme,
  MuiThemeProvider,
  createTheme,
} from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import PropTypes from "prop-types";
import React from "react";
import { withStyles } from "@mui/styles";
import { CommonStyles } from "../../utils/appUtils";
import SecondaryButton from "../Buttons/SecondaryButton";

const options = ["High Priority", "Medium Priority", "Low Priority"];

const styles = {
  fonts: {
    fontFamily: `'Saira Condensed', sans-serif !important`,
    color: CommonStyles.color.white,
  },

  dialogHeading: {
    background: CommonStyles.color.gradient,
  },
  dialogContent: {
    backgroundColor: CommonStyles.color.black,
  },

  okButton: {
    backgroundColor: `${CommonStyles.color.white} !important`,
    color: `${CommonStyles.color.lighMaroon} !important`,
    height: 48,
  },
};

const CategoryModal = (props) => {
  const { onClose, value: valueProp, open, classes, ...other } = props;
  const [value, setValue] = React.useState(valueProp);
  const radioGroupRef = React.useRef(null);

  React.useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose(value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Dialog
      sx={{ "& .MuiDialog-paper": { width: "50%", maxHeight: 435 } }}
      maxWidth="xs"
      TransitionProps={{ onEntering: handleEntering }}
      open={open}
      {...other}
    >
      <DialogTitle className={`${classes.dialogHeading} ${classes.fonts}`}>
        Select Category
      </DialogTitle>
      <DialogContent className={classes.dialogContent} dividers>
        <RadioGroup
          ref={radioGroupRef}
          aria-label="category"
          name="category"
          value={value}
          className={classes.fonts}
          onChange={handleChange}
        >
          {options.map((option) => (
            <FormControlLabel
              className={classes.fonts}
              value={option}
              key={option}
              control={<Radio className={classes.fonts} />}
              label={option}
            />
          ))}
        </RadioGroup>
      </DialogContent>
      <DialogActions className={classes.dialogContent}>
        <SecondaryButton clickHandler={handleCancel} title="cancel" />
        <Button
          className={`${classes.okButton} ${classes.fonts}`}
          onClick={handleOk}
        >
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

CategoryModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CategoryModal);
