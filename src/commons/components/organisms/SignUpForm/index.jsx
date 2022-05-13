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
import { changeSignIn } from "../../../redux/signInFormSlice";
import {
  verificarEmail,
  verificarSenha,
} from "../../../helpers/utils/formValidation";
import axios from "axios";

function SignInForm() {
  const showSignInForm = useSelector(
    ({ showSignInForm }) => showSignInForm.value
  );
  const dispatch = useDispatch();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorSenha, setErrorSenha] = useState(false);
  const [errorMsgEmail, setErrorMsgEmail] = useState("");
  const [errorMsgSenha, setErrorMsgSenha] = useState("");

  const createUser = () => {
    axios
      .post("/user", {
        nome: "Fred",
        login: "Flintstone",
        senha: "XVIDEOS",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div style={{ maxWidth: "100vw" }}>
      <Dialog open={showSignInForm} onClose={() => dispatch(changeSignIn())}>
        <DialogTitle>Faça login em sua conta</DialogTitle>
        <DialogContent>
          <TextField
            value={nome}
            onChange={(e) => {
              setNome(e.target.value);
            }}
            autoFocus
            margin="dense"
            id="name"
            label="Nome"
            error={errorEmail}
            helperText={errorMsgEmail}
            type="nome"
            fullWidth
            variant="standard"
          />
          <TextField
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrorMsgEmail(verificarEmail(email));
              if (errorMsgEmail !== "") {
                setErrorEmail(true);
              } else {
                setErrorEmail(false);
              }
            }}
            onClick={() => {
              setErrorMsgEmail(verificarEmail(email));
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
              setPassword(e.target.value);
              setErrorMsgSenha(verificarSenha(password));
              if (errorMsgSenha !== "") {
                setErrorSenha(true);
              } else {
                setErrorSenha(false);
              }
            }}
            onClick={() => {
              setErrorSenha(verificarSenha(password));
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
        </DialogContent>
        <DialogActions>
          <Button onClick={() => dispatch(changeSignIn())}>Cancel</Button>
          <Button onClick={() => dispatch(createUser())}>Create Account</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SignInForm;
