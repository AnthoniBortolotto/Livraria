export function verificarEmail(texto) {
    let mensagem = "";
    if (texto === "") mensagem = "O email não foi preenchido";
    else if (!/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(texto))
      mensagem = "digite um email válido";
    return mensagem;
  }

  export function verificarSenha(senha) {
    let mensagem = "";
    if (senha.length < 8) mensagem = "a senha deve ter 8 caracteres";
    else if (
      !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(
        senha
      )
    )
      mensagem =
        "a senha não tem letras maiusculas e minusculas, números e caracteres especiais";
    return mensagem;
  }
  