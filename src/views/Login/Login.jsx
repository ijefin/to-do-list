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
            <h1>Entrar</h1>
            <label>
              <span>Login</span>
            </label>
            <input
              className="user"
              placeholder="user@example.com"
              type="text"
            />
            <label>
              <span>Senha</span>
            </label>
            <input className="user" placeholder="*******" type="password" />
            <input className="submit" type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};
