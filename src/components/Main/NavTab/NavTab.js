import '../../../index.css';
import './NavTab.css';
import React from "react";






function NavTab(props) {
  return (
    <div className="navtab">
      <div className="navtab__link-container">
        <a className="navtab__link" href="#about-project">О проекте</a>
        <a className="navtab__link" href="#techs">Технологии</a>
        <a className="navtab__link" href="#about-me">Студент</a>
      </div>
    </div>
  );
}

export default NavTab;
