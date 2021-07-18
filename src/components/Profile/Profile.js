import '../../index.css';
import './Profile.css';
import React from "react";
import { withRouter, useHistory } from 'react-router-dom';
import validator from 'validator'
import CurrentUserContext from '../CurrentUserContext/CurrentUserContext'

import Header from '../Header/Header';



function Profile(props) {
  const [emailValue, setEmailValue] = React.useState('');
  const [emailValidity, setEmailValidity] = React.useState({});
  const [nameValue, setNameValue] = React.useState('');
  const [nameValidity, setNameValidity] = React.useState({});

  const currentUser = React.useContext(CurrentUserContext);

  const history = useHistory();
  React.useEffect(() => {
    setEmailValue(currentUser.email);
    setNameValue(currentUser.name);
  }, [currentUser]);

  function handleEditProfileClick() {
    setEmailValue(currentUser.email);
    setEmailValidity({
      errorMassage: '',
      validState: true
    })
    setNameValidity({
      errorMassage: '',
      validState: true
    })
    setNameValue(currentUser.name);
    props.setEditProfileClicked(true)
  }
  function handleEditProfileSubmit(e) {
    e.preventDefault();
    props.handleUpdateUser({
      email: emailValue,
      name: nameValue
    })

  }
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
  function handleNameChange(e) {
    setNameValue(e.target.value);
    setNameValidity({
      errorMassage: e.target.validationMessage,
      validState: e.target.validity.valid
    });
  }
  function handleExit() {
    props.setLoggedIn(false)
    localStorage.removeItem('jwt');
    localStorage.removeItem('_id');
    localStorage.removeItem('email');
    history.push('/signin');
  }

  return (
    <>
      <Header handleMenuOpenClick={props.handleMenuOpenClick} loggedIn={props.loggedIn} />
      <div className="profile">
        <h2 className="profile__greeting">Привет, {currentUser.name}</h2>

        <>
          {!props.isEditProfileClicked ? (
            <>
              <form className="profile__form" name="profile">
                <div className="profile__container">
                  <div className="profile__input-container">
                    <p className="profile__input-title">Имя</p>
                    <input className="profile__input" name="name" type="text" onClick={handleEditProfileClick} readOnly required value={nameValue}></input>
                  </div>

                </div>
                {/* <span className="profile__form-line"></span> */}
                <div className="profile__container">
                  <div className="profile__input-container">
                    <p className="profile__input-title">E-mail</p>
                    <input className="profile__input" name="email" type="email" onClick={handleEditProfileClick} required readOnly value={emailValue}></input>
                  </div>

                </div>
              </form>
              <p className="profile__good-massage">{props.profileMessage}</p>
              <button className="profile__edit" onClick={handleEditProfileClick}>Редактировать</button>
              <div className="profile__auth-text-container">
                <p className="profile__exit" to='/signin' onClick={handleExit}>Выйти из аккаунта</p>
              </div>
            </>
          ) : (
            <form className="profile__form" name="profile" onSubmit={handleEditProfileSubmit}>
              <div className="profile__container">
                <div className="profile__input-container">
                  <p className="profile__input-title">Имя</p>
                  <input className="profile__input" name="name" type="text" minLength="2" required value={nameValue} onChange={handleNameChange}></input>
                </div>
                <span className="profile__error">{nameValidity.errorMassage}</span>
              </div>
              {/* <span className="profile__form-line"></span> */}
              <div className="profile__container">
                <div className="profile__input-container">
                  <p className="profile__input-title">E-mail</p>
                  <input className="profile__input" name="email" type="email" required value={emailValue} onChange={handleEmailChange}></input>
                </div>

                <span className="profile__error">{emailValidity.errorMassage}</span>
              </div>
              <span className="profile__api-error">{props.apiErrorMessage}</span>
              <button type="submit" className={`profile__submit-button ${(emailValidity.validState && nameValidity.validState && (emailValue !== currentUser.email || nameValue !== currentUser.name)) ? "profile__submit-button_active" : "profile__submit-button_disabled"}`} disabled={(emailValidity.validState && nameValidity.validState && (emailValue !== currentUser.email || nameValue !== currentUser.name)) ?  false :  true}>Сохранить</button>
            </form>
          )}
        </>




      </div>
    </>

  );
}

export default withRouter(Profile);
