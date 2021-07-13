import '../../index.css';
import './MenuPopup.css';
import React from "react";
import { Link, withRouter, NavLink } from 'react-router-dom';

import profileIcon from '../../images/profile-icon.svg'




function MenuPopup(props) {
  return (
    <div className={`menu-popup ${props.isMenuPopupOpen ? 'menu-popup_active' : ''}`}>
      <div className={`menu-popup__container ${props.isMenuPopupOpen ? 'menu-popup__container_active' : ''}`}>
        <div className="menu-popup__close" onClick={props.handleMenuCloseClick}></div>
        <nav className="menu-popup__link-container">
        <NavLink exact to="/"  className="menu-popup__link" activeClassName="menu-popup__link_active" onClick={props.handleMenuCloseClick}>Главная</NavLink>
        <NavLink to="/movies"  className="menu-popup__link" activeClassName="menu-popup__link_active" onClick={props.handleMenuCloseClick}>Фильмы</NavLink>
        <NavLink to="/saved-movies"  className="menu-popup__link" activeClassName="menu-popup__link_active" onClick={props.handleMenuCloseClick}>Сохранённые фильмы</NavLink>
        <Link to="/profile" className="menu-popup__profile-button-container" onClick={props.handleMenuCloseClick}>
        <img alt="Иконка профиля" src={profileIcon} className="menu-popup__profile-icon" />
        <p className="menu-popup__profile-text">Аккаунт</p>
        </Link>
        </nav>
      </div>
      <div className={`menu-popup__background ${props.isMenuPopupOpen ? 'menu-popup__background_active' : ''}`} onClick={props.handleMenuCloseClick}>

      </div>
    </div>
  );
}

export default MenuPopup;
