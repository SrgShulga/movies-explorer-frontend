/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './Portfolio.css'

function Portfolio() {
  return (
    <>
      <section className="portfolio">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__projects">
          <li className="project">
            <a href="#" className="project__link">Статичный сайт
              <svg className="project__link-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="17" fill="none">
                <path fill="#000" d="M2.6 16.52 14.97 4.14l-.02 9.55h2.33V.19H3.77l-.01 2.3h9.54L.94 14.85l1.67 1.66Z" />
              </svg>
            </a>
          </li>
          <li className="project">
            <a href="#" className="project__link">Адаптивный сайт
              <svg className="project__link-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="17" fill="none">
                <path fill="#000" d="M2.6 16.52 14.97 4.14l-.02 9.55h2.33V.19H3.77l-.01 2.3h9.54L.94 14.85l1.67 1.66Z" />
              </svg>
            </a>
          </li>
          <li className="project">
            <a href="#" className="project__link">Одностраничное приложение
              <svg className="project__link-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="17" fill="none">
                <path fill="#000" d="M2.6 16.52 14.97 4.14l-.02 9.55h2.33V.19H3.77l-.01 2.3h9.54L.94 14.85l1.67 1.66Z" />
              </svg>
            </a>
          </li>
        </ul>
      </section>
    </>
  )
}

export default Portfolio;