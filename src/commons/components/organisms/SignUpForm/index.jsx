import React, { useEffect, useState } from "react";
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
  verificarNome,
  verificarSenha,
} from "../../../helpers/utils/formValidation";
import axios from "axios";
import { domain } from "../../../helpers/utils/global";

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
  const [errorNome, setErrorNome] = useState(false);
  const [errorMsgNome, setErrorMsgNome] = useState("");

  useEffect(() => {
    checkEmail();
  }, [email]);

  useEffect(() => {
    checkSenha();
  }, [password]);

  useEffect(() => {
    checkNome();
  }, [nome]);

  useEffect(() => {
    setErrorMsgEmail("");
    setErrorEmail(false);
    setErrorMsgSenha("");
    setErrorSenha(false);
    setErrorNome(false);
    setErrorMsgNome("");
  }, []);

  function handlerNome(e) {
    setNome(e.target.value);
  }
  function handlerEmail(e) {
    setEmail(e.target.value);
  }

  function handlerPassword(e) {
    setPassword(e.target.value);
  }
  function checkNome() {
    setErrorMsgNome(verificarNome(nome));
    setErrorNome(errorMsgNome !== "");
  }
  function checkSenha() {
    setErrorMsgSenha(verificarSenha(password));
    if (errorMsgSenha !== "") {
      setErrorSenha(true);
    } else {
      setErrorSenha(false);
    }
  }

  function checkEmail() {
    setErrorMsgEmail(verificarEmail(email));
    if (errorMsgEmail !== "") {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }
  }
  const createUser = async () => {
    await checkEmail();
    await checkSenha();
    await checkNome();
    console.log("resultado", errorEmail, errorSenha, errorNome);
    if (!errorEmail && !errorSenha && !errorNome) {
      console.log("chegou");
      /* axios
        .post(`${domain}/user/post`, {
          nome: nome,
          login: email,
          senha: password,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
          setErrorEmail(true);
          setErrorMsgEmail("Email já cadastrado");
        }); */
      dispatch(changeSignIn());
    }
  };

  return (
    <div style={{ maxWidth: "100vw" }}>
      <Dialog open={showSignInForm} onClose={() => dispatch(changeSignIn())}>
        <DialogTitle>Faça login em sua conta</DialogTitle>
        <DialogContent>
          <TextField
            value={nome}
            onChange={handlerNome}
            margin="dense"
            id="name"
            label="Nome"
            error={errorNome}
            helperText={errorMsgNome}
            type="nome"
            fullWidth
            variant="standard"
          />
          <TextField
            value={email}
            onChange={handlerEmail}
            //onClick={handlerNome}

            margin="dense"
            id="email"
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
        </DialogContent>
        <DialogActions>
          <Button onClick={() => dispatch(changeSignIn())}>Cancel</Button>
          <Button onClick={() => createUser()}>Create Account</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SignInForm;
