import { useNavigate } from "react-router-dom";
import Usuario from "../../modelo/Usuario";
import PaginaCadastro from "./PaginaCadastro";

function Cadastro() {
  const navigate = useNavigate();

  // função para criar requisição POST de um usuário no sistema
  const createUsuario = (usuario: Usuario) => {
    fetch("http://localhost:8080/usuario", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(usuario),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data), navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return <PaginaCadastro tipoLogin="usuario" linkLogin="login/usuario" />;
}

export default Cadastro;
