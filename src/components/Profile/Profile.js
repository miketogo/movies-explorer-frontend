import '../../index.css';
import './Profile.css';
import React from "react";
import { Link, withRouter } from 'react-router-dom';

import Header from '../Header/Header';



function Profile(props) {
  const [isEditProfileClicked, setEditProfileClicked] = React.useState(false);
  const [emailValue, setEmailValue] = React.useState('test@test.test');
  const [nameValue, setNameValue] = React.useState('Тестовое имя');
  function handleEditProfileClick() {
    setEditProfileClicked(true)
  }
  function handleEditProfileSubmit(){
    setEditProfileClicked(false)
  }
  function handleEmailChange(e) {
    setEmailValue(e.target.value);
  }
  function handleNameChange(e) {
    setNameValue(e.target.value);
  }
  return (
    <>
      <Header handleMenuOpenClick={props.handleMenuOpenClick} />
      <div className="profile">
        <h2 className="profile__greeting">Привет, Виталий!</h2>

          <>
            {!isEditProfileClicked ? (
            <>
            <form className="profile__form" name="profile">
            <div className="profile__input-container">
              <p className="profile__input-title">Имя</p>
              <input className="profile__input" name="name" type="text" onClick={handleEditProfileClick} readOnly required value={nameValue}></input>
            </div>
            {/* <span className="profile__form-line"></span> */}
            <div className="profile__input-container">
              <p className="profile__input-title">E-mail</p>
              <input className="profile__input" name="email" type="email" onClick={handleEditProfileClick} required readOnly value={emailValue}></input>
            </div>
            </form>
            <button className="profile__edit" onClick={handleEditProfileClick}>Редактировать</button>
            <div className="profile__auth-text-container">
            <Link className="profile__exit" to='/signin'>Выйти из аккаунта</Link>
            </div>
            </>
          ) : (
            <form className="profile__form" name="profile">
            <div className="profile__input-container">
              <p className="profile__input-title">Имя</p>
              <input className="profile__input" name="name" type="text" required value={nameValue} onChange={handleNameChange}></input>
            </div>
            {/* <span className="profile__form-line"></span> */}
            <div className="profile__input-container">
              <p className="profile__input-title">E-mail</p>
              <input className="profile__input" name="email" type="email" required value={emailValue} onChange={handleEmailChange}></input>
            </div>
            <button type="submit" className="profile__submit-button" onClick={handleEditProfileSubmit}>Сохранить</button>
            </form>
          )}
          </>




      </div>
    </>

  );
}

export default Profile;
