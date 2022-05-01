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
import { verificarEmail, verificarSenha } from "../../../helpers/utils/formValidation";

function LoginForm() {
  const showLoginForm = useSelector(({ showLoginForm }) => showLoginForm.value);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorSenha, setErrorSenha] = useState(false);
  const [errorMsgEmail, setErrorMsgEmail] = useState("");
  const [errorMsgSenha, setErrorMsgSenha] = useState("");




  return (
    <div style={{ maxWidth: "100vw" }}>
      <Dialog open={showLoginForm} onClose={() => dispatch(change())}>
        <DialogTitle>Faça login em sua conta</DialogTitle>
        <DialogContent>
          <TextField
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setErrorMsgEmail(verificarEmail(email))
              if (errorMsgEmail !== "") {
                setErrorEmail(true);
              } else {
                setErrorEmail(false);
              }
            }}
            onClick={() => {
              setErrorMsgEmail(verificarEmail(email))
              if (errorMsgEmail !== "") {
                setErrorEmail(true);
              } else {
                setErrorEmail(false);
              }
            }}
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            error={errorEmail}
            helperText={errorMsgEmail}
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              setErrorMsgSenha(verificarSenha(password))
              if (errorMsgSenha !== "") {
                setErrorSenha(true);
              } else {
                setErrorSenha(false);
              }
            }}
            onClick={() => {
              setErrorSenha(verificarSenha(password))
              if (errorMsgEmail !== "") {
                setErrorSenha(true);
              } else {
                setErrorSenha(true);
              }
            }}
            autoFocus
            margin="dense"
            id="password"
            label="Senha"
            error={errorSenha}
            helperText={errorMsgSenha}
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
