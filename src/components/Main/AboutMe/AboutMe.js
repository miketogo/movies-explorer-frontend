import '../../../index.css';
import './AboutMe.css';
import React from "react";
import { Link, withRouter } from 'react-router-dom';

import me from '../../../images/me.jpg'





function AboutMe(props) {
  return (
    <div className="about-me" id="about-me">
      <div className="about-me__container">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__description">
          <div className="about-me__text-container">
            <h3 className="about-me__name">Михаил</h3>
            <p className="about-me__epilogue">Веб-разработчик, 19 лет</p>
            <p className="about-me__story">Я родился и живу в Санкт-Петербурге. Я люблю слушать музыку во время написания кода, а ещё увлекаюсь фитнесом. Недавно начал кодить.
              С 2020 года работаю в компании «ООО Профессионал». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами.
            </p>
            <div className="about-me__links">
            <a href="https://vk.com/surbek" className="about-me__link" target="_blank" rel="noreferrer">Вконтакте</a>
            <a href="https://github.com/miketogo" className="about-me__link" target="_blank" rel="noreferrer">Github</a>
            </div>
          </div>
          <img className="about-me__image" alt="Фотография автора" src={me} />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
