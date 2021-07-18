import '../../index.css';
import './Register.css';
import React from "react";
import { Link} from 'react-router-dom';
import validator from 'validator'

import logo from '../../images/logo.svg'



function Register(props) {
  const [emailValue, setEmailValue] = React.useState('');
  const [emailValidity, setEmailValidity] = React.useState({});
  const [passValue, setPassValue] = React.useState('');
  const [passValidity, setPassValidity] = React.useState({});
  const [nameValue, setNameValue] = React.useState('');
  const [nameValidity, setNameValidity] = React.useState({});


  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    console.log(nameValue, emailValue, passValue)
    props.onRegister(nameValue, emailValue, passValue);
  };
  function handleEmailChange(e) {
    setEmailValue(e.target.value);
    if (validator.isEmail(e.target.value)) {
      setEmailValidity({
        errorMassage: '',
        validState: true
      })
    } else {
      setEmailValidity({
        errorMassage: (!e.target.validity.valid ? e.target.validationMessage : 'Введите валидный email'),
        validState: false
      })
    }

    ;
  }
  function handlePassChange(e) {
    setPassValue(e.target.value);
    setPassValidity({
      errorMassage: e.target.validationMessage,
      validState: e.target.validity.valid
    });
  }
  function handleNameChange(e) {
    setNameValue(e.target.value);
    setNameValidity({
      errorMassage: e.target.validationMessage,
      validState: e.target.validity.valid
    });
  }
  return (
    <div className="register">
      <Link to="/">
      <img className="register__logo" alt="Логотип" src={logo}></img>
      </Link>
      <h2 className="register__greeting">Добро пожаловать!</h2>
      <form className="register__form" name="register" onSubmit={handleSubmit}>
        <div className="register__input-container">
          <p className="register__input-title">Имя</p>
          <input className="register__input" name="name" type="text" required value={nameValue} onChange={handleNameChange} minLength="2" maxLength="30"></input>
          <span className="register__error">{nameValidity.errorMassage}</span>
        </div>
        <div className="register__input-container">
          <p className="register__input-title">E-mail</p>
          <input className="register__input" name="email" type="email" required value={emailValue} onChange={handleEmailChange}></input>
          <span className="register__error">{emailValidity.errorMassage}</span>
        </div>
        <div className="register__input-container">
          <p className="register__input-title">Пароль</p>
          <input className="register__input" name="password" type="password" required value={passValue} onChange={handlePassChange}></input>
          <span className="register__error">{passValidity.errorMassage}</span>
        </div>

        <span className="register__api-error">{props.apiErrorMessage}</span>
        <button type="submit" className={`register__submit-button ${(emailValidity.validState && nameValidity.validState && passValidity.validState) ? "register__submit-button_active" : "register__submit-button_disabled"}`} disabled={(emailValidity.validState && nameValidity.validState && passValidity.validState) ?  false :  true}>Зарегистрироваться</button>
        <div className="register__auth-text-container">
          <p className="register__auth-text">Уже зарегистрированы? <Link className="register__auth-link" to='/signin'>Войти</Link></p>

        </div>
      </form>
    </div>
  );
}

export default Register;
