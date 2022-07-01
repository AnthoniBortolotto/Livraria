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
import {
  verificarEmail,
  verificarSenha,
} from "../../../helpers/utils/formValidation";
import axios from "axios";
import { changeSignIn } from "../../../redux/signInFormSlice";
import { useEffect } from "react";
import { domain } from "../../../helpers/utils/global";

function LoginForm() {
  const showLoginForm = useSelector(({ showLoginForm }) => showLoginForm.value);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorSenha, setErrorSenha] = useState(false);
  const [errorMsgEmail, setErrorMsgEmail] = useState("");
  const [errorMsgSenha, setErrorMsgSenha] = useState("");

  function handlerEmail(e) {
    setEmail(e.target.value);
  }

  function handlerPassword(e) {
    setPassword(e.target.value);
  }

  function checkSenha() {
    setErrorMsgSenha(verificarSenha(password));
    setErrorSenha(errorMsgSenha !== "");
  }

  function checkEmail() {
    const msg = verificarEmail(email);
    setErrorMsgEmail(msg);
    setErrorEmail(errorMsgEmail !== "");
  }
  useEffect(() => {
    checkEmail();
  }, [email]);

  useEffect(() => {
    checkSenha();
  }, [password]);

  function login() {
    checkEmail();
    checkSenha();
    if (!errorEmail && !errorSenha) {
      console.log("entrou");
      axios
        .post(`${domain}/user/auth`, {
          login: email,
          senha: password,
        })
        .then((res) => {
          window.localStorage.setItem("token", res.data.token);
          dispatch(change());
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status === 401) {
            setErrorMsgEmail("Email ou senha incorretos");
            setErrorEmail(true);
          }
        });
    }
  }

  return (
    <div style={{ maxWidth: "100vw" }}>
      <Dialog open={showLoginForm} onClose={() => dispatch(change())}>
        <DialogTitle>Faça login em sua conta</DialogTitle>
        <DialogContent>
          <TextField
            value={email}
            onChange={handlerEmail}
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
            onChange={handlerPassword}
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
            <span
              className="linkButton"
              onClick={() => {
                dispatch(changeSignIn());
                dispatch(change());
              }}
            >
              aqui
            </span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => dispatch(change())}>Fechar</Button>
          <Button onClick={() => login()}>Fazer login</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default LoginForm;
