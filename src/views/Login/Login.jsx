import { React, useEffect, useState } from "react";
import "./Login.css";
import todo from "../../assets/login.png";

export const Login = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // Simulação de lógica de envio
    alert("Dados enviados com sucesso!");
    // Limpar os campos do formulário
    setFormData({
      nome: "",
      email: "",
    });
  };

  return (
    <>
      <div className="main-login-card">
        <div className="form-image">
          <img src={todo} />
        </div>
        <div className="login-form">
          <div>
            <label className="label-text" htmlFor="login">
              Login
            </label>
            <input
              type="text"
              id="login"
              name="login"
              placeholder="usuario123"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="label-text" htmlFor="senha">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="*****"
              required
            />
          </div>
          <div>
            <button type="submit" onClick={handleSubmit}>
              Entrar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
