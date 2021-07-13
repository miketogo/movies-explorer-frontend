import '../../../index.css';
import './Promo.css';
import React from "react";
import { Link, withRouter } from 'react-router-dom';

import logo from '../../../images/promo-logo.svg'





function Promo(props) {
  return (
    <div className="promo">
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <img alt="Логотип" src={logo} className="promo__logo" />
    </div>
  );
}

export default Promo;
