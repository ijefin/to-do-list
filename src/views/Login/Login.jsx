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
          <form>
            <h1>Entrar</h1>
            <label>Login</label>
            <input type="text" />
            <label>Senha</label>
            <input type="password" />
          </form>
        </div>
      </div>
    </>
  );
};
