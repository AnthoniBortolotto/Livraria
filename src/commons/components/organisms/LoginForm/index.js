import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";

function LoginForm({ showLoginForm, setShowLoginForm, setShowSignUpForm }) {
  return (
    <div>
      <Dialog open={showLoginForm} onClose={() => setShowLoginForm(false)}>
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
          <Button onClick={setShowLoginForm(false)}>Cancel</Button>
          <Button onClick={setShowLoginForm(false)}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default LoginForm;
