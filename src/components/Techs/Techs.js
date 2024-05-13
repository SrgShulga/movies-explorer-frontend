import React from "react";
import './Techs.css'

function Techs() {
  return (
    <>
      <section className="techs" id="techs">
        <div className="techs__container">
          <h2 className="techs__title">Технологии</h2>
          <div className="techs__text">
            <h3 className="text__title">7 технологий</h3>
            <p className="text__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          </div>
          <ul className="techs__list">
            <li className="tech__icon">HTML</li>
            <li className="tech__icon">CSS</li>
            <li className="tech__icon">JS</li>
            <li className="tech__icon">React</li>
            <li className="tech__icon">Git</li>
            <li className="tech__icon">Express.js</li>
            <li className="tech__icon">mongoDB</li>
          </ul>
        </div>
      </section>
    </>
  )
}
export default Techs;