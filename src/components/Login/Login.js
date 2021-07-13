import '../../index.css';
import './Login.css';
import React from "react";
import { Link, withRouter } from 'react-router-dom';

import logo from '../../images/logo.svg'



function Login() {
  const [emailValue, setEmailValue] = React.useState('');
  const [passValue, setPassValue] = React.useState('');
  function handleEmailChange(e) {
    setEmailValue(e.target.value);
  }
  function handlePassChange(e) {
    setPassValue(e.target.value);
  }
  return (
    <div className="login">
      <Link to="/">
      <img className="login__logo" alt="Логотип" src={logo}></img>
      </Link>
      <h2 className="login__greeting">Рады видеть!</h2>
      <form className="login__form" name="login">
        <div className="login__input-container">
          <p className="login__input-title">E-mail</p>
          <input className="login__input" name="email" type="email" required value={emailValue} onChange={handleEmailChange}></input>
        </div>
        <div className="login__input-container">
          <p className="login__input-title">Пароль</p>
          <input className="login__input" name="password" type="password" required value={passValue} onChange={handlePassChange}></input>
        </div>


        <button type="submit" className="login__submit-button">Войти</button>
        <div className="login__auth-text-container">
          <p className="login__auth-text">Ещё не зарегистрированы? <Link className="login__auth-link" to='/signup'>Регистрация</Link></p>

        </div>
      </form>
    </div>
  );
}

export default Login;
