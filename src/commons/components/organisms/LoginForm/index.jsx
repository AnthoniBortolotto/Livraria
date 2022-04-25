import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import { useSelector, useDispatch } from "react-redux";
import { change } from "../../../redux/loginFormSlice";

function LoginForm() {
  const showLoginForm = useSelector(({ showLoginForm }) => showLoginForm.value);
  const dispatch = useDispatch();
  return (
    <div>
      {showLoginForm ? "true" : "false"}
      <Dialog open={showLoginForm} onClose={() => dispatch(change())}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => dispatch(change())}>Cancel</Button>
          <Button onClick={() => dispatch(change())}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default LoginForm;
