import '../../index.css';
import './Navigation.css';
import React from "react";
import { NavLink, withRouter } from 'react-router-dom';

import logo from '../../images/logo.svg'



function Navigation() {
  return (
    <div className="navigation">
      <NavLink className="navigation__link" activeClassName="navigation__link_active" to='/movies'>Фильмы</NavLink>
      <NavLink className="navigation__link" activeClassName="navigation__link_active" to='/saved-movies'>Сохранённые фильмы</NavLink>
    </div>
  );
}

export default Navigation;
