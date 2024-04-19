/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './AboutMe.css'
import photo from '../../images/about-me-photo.jpeg'

function AboutMe() {
  return (
    <>
      <section className="about-me" id="student">
        <div className="about-me__container">
          <h2 className="about-me__title">Студент</h2>
          <div className="about-me__student">
            <div className="student__info">
              <h3 className="student__name">Сергей</h3>
              <p className="student__about">Фронтенд-разработчик, 23 года</p>
              <p className="student__description">Я родился в Ростове-на-Дону, получил высшее образование инженера по обслуживанию авиационного транспорта. На последнем курсе стал задумываться о смене направления и занялся программированием. В этом деле мне нравится такой же инженерный подход и возможность реализовать свой творческий потенциал. </p>
              <ul className="student__contacts">
                <li className="contact__icon">
                  <a href="https://github.com/SrgShulga" target="_blank" rel="noreferrer" className="contact__link">Github</a>
                </li>
              </ul>
            </div>
            <img src={photo} alt="фото" className="student__image"></img>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutMe;
