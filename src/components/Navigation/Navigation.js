import '../../index.css';
import './Navigation.css';
import React from "react";
import { NavLink } from 'react-router-dom';





function Navigation() {
  return (
    <div className="navigation">
      <NavLink className="navigation__link" activeClassName="navigation__link_active" to='/movies'>Фильмы</NavLink>
      <NavLink className="navigation__link" activeClassName="navigation__link_active" to='/saved-movies'>Сохранённые фильмы</NavLink>
    </div>
  );
}

export default Navigation;
