import '../../index.css';
import './Register.css';
import React from "react";
import { Link, withRouter } from 'react-router-dom';

import logo from '../../images/logo.svg'



function Register() {
  const [emailValue, setEmailValue] = React.useState('');
  const [passValue, setPassValue] = React.useState('');
  const [nameValue, setNameValue] = React.useState('');
  function handleEmailChange(e) {
    setEmailValue(e.target.value);
  }
  function handlePassChange(e) {
    setPassValue(e.target.value);
  }
  function handleNameChange(e) {
    setNameValue(e.target.value);
  }
  return (
    <div className="register">
      <Link to="/">
      <img className="register__logo" alt="Логотип" src={logo}></img>
      </Link>
      <h2 className="register__greeting">Добро пожаловать!</h2>
      <form className="register__form" name="register">
        <div className="register__input-container">
          <p className="register__input-title">Имя</p>
          <input className="register__input" name="name" type="text" required value={nameValue} onChange={handleNameChange}></input>
        </div>
        <div className="register__input-container">
          <p className="register__input-title">E-mail</p>
          <input className="register__input" name="email" type="email" required value={emailValue} onChange={handleEmailChange}></input>
        </div>
        <div className="register__input-container">
          <p className="register__input-title">Пароль</p>
          <input className="register__input" name="password" type="password" required value={passValue} onChange={handlePassChange}></input>
        </div>


        <button type="submit" className="register__submit-button">Зарегистрироваться</button>
        <div className="register__auth-text-container">
          <p className="register__auth-text">Уже зарегистрированы? <Link className="register__auth-link" to='/signin'>Войти</Link></p>

        </div>
      </form>
    </div>
  );
}

export default Register;
