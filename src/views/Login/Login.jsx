import React from "react";
import "./Login.css";
import todo from "../../assets/login.png";

export const Login = () => {
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
            <input type="text" id="login" name="login" placeholder="usuario123" required />
          </div>
          <div>
            <label className="label-text" htmlFor="senha">
              Senha
            </label>
            <input type="password" id="senha" name="senha" placeholder="*****" required />
          </div>
          <div>
            <button type="submit">Entrar</button>
          </div>
        </div>
      </div>
    </>
  );
};
