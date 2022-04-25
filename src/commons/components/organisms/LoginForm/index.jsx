import React, { useState } from "react";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div style={{ maxWidth: "100vw" }}>
      <Dialog open={showLoginForm} onClose={() => dispatch(change())}>
        <DialogTitle>Faça login em sua conta</DialogTitle>
        <DialogContent>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
            margin="dense"
            id="password"
            label="Senha"
            type="password"
            fullWidth
            variant="standard"
          />
          <DialogContentText>
            Não possui uma conta? Crie uma agora clicando{" "}
            <span className="linkButton" onClick={() => dispatch(change())}>
              aqui
            </span>
          </DialogContentText>
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
