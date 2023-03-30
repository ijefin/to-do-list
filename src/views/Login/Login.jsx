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

        <hr />

        <div className="login-form">
          <form>
            <h1 className="sign-in">Entrar</h1>
            <div className="login-input">
              <label>
                <span className="login">Login</span>
              </label>
              <input
                className="user"
                placeholder="user@example.com"
                type="text"
              />
            </div>
            <div className="password-input">
              <label>
                <span className="login">Senha</span>
              </label>
              <input className="user" placeholder="*******" type="password" />
            </div>
            <input className="submit" type="submit" />
            <a href="">Ainda não possui conta? Cadastre-se!</a>
          </form>
        </div>
      </div>
    </>
  );
};
