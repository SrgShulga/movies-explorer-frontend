import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return(
    <section className="about" id="about">
      <h2 className="about__title">О проекте</h2>
      <div className="about__info">
        <div className="info__box">
          <h3 className="box__title">Дипломный проект включал 5 этапов</h3>
          <p className="box__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="info__box">
          <h3 className="box__title">На выполнение диплома ушло 5 недель</h3>
          <p className="box__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about__infographic">
        <div className="infographic__backend">
          <p className="infographic__title infographic__title_type_color">1 неделя</p>
          <p className="infographic__text">Back-end</p>
        </div>
        <div className="infographic__frontend">
          <p className="infographic__title">4 недели</p>
          <p className="infographic__text">Front-end</p>
        </div>
      </div>
    </section>
  ) 
}

export default AboutProject;