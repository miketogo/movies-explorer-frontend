import '../../../index.css';
import './Portfolio.css';
import React from "react";
import { Link, withRouter } from 'react-router-dom';





function Portfolio(props) {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <a className="portfolio__item" href="https://miketogo.github.io/how-to-learn/" target="_blank" rel="noreferrer">
        <p className="portfolio__item-text">Статичный сайт</p>
        <p className="portfolio__item-arrow">&#8599;</p>
      </a>
      <a className="portfolio__item" href="https://miketogo.github.io/russian-travel/" target="_blank" rel="noreferrer">
        <p className="portfolio__item-text">Адаптивный сайт</p>
        <p className="portfolio__item-arrow">&#8599;</p>
      </a>
      <a className="portfolio__item" href="https://surikov.mesto.students.nomoredomains.monster/" target="_blank" rel="noreferrer">
        <p className="portfolio__item-text">Одностраничное приложение</p>
        <p className="portfolio__item-arrow">&#8599;</p>
      </a>
    </div>
  );
}

export default Portfolio;
