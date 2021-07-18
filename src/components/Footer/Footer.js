import '../../index.css';
import './Footer.css';
import React from "react";






function Footer(props) {
  return (
    <footer className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__container">
        <p className="footer__copyright">© 2021</p>
        <div className="footer__links">
        <a className="footer__link" href="https://praktikum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
        <a className="footer__link" href="https://github.com/miketogo" target="_blank" rel="noreferrer">Github</a>
        <a className="footer__link" href="https://vk.com/surbek" target="_blank" rel="noreferrer">Вконтакте</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
