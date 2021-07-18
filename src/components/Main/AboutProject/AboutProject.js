import '../../../index.css';
import './AboutProject.css';
import React from "react";






function AboutProject(props) {
  return (
    <div className="about-project" id="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__two-chapters-container">
        <div className="about-project__chapter-container">
          <h3 className="about-project__chapter-title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__chapter-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__chapter-container">
          <h3 className="about-project__chapter-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__chapter-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about-project__graph">
        <div className="about-project__graph-green">
          <p className="about-project__graph-text-green">1 неделя</p>
        </div>
        <div className="about-project__graph-gray">
          <p className="about-project__graph-text-gray">4 недели</p>
        </div>
        <p className="about-project__graph-subtitle">Back-end</p>
        <p className="about-project__graph-subtitle">Front-end</p>
      </div>
    </div>
  );
}

export default AboutProject;
