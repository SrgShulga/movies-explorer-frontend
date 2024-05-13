import React from "react";
import './Portfolio.css'

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__projects">
          <li className="project">
            <a href="https://github.com/SrgShulga/how-to-learn" className="project__link" target="blank">Статичный сайт
              <svg className="project__link-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="17" fill="none">
                <path fill="#000" d="M2.6 16.52 14.97 4.14l-.02 9.55h2.33V.19H3.77l-.01 2.3h9.54L.94 14.85l1.67 1.66Z" />
              </svg>
            </a>
          </li>
          <li className="project">
            <a href="https://srgshulga.github.io/russian-travel/" className="project__link" target="blank">Адаптивный сайт
              <svg className="project__link-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="17" fill="none">
                <path fill="#000" d="M2.6 16.52 14.97 4.14l-.02 9.55h2.33V.19H3.77l-.01 2.3h9.54L.94 14.85l1.67 1.66Z" />
              </svg>
            </a>
          </li>
          <li className="project">
            <a href="https://github.com/SrgShulga/react-mesto-api-full-gha" className="project__link" target="blank">Одностраничное приложение
              <svg className="project__link-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="17" fill="none">
                <path fill="#000" d="M2.6 16.52 14.97 4.14l-.02 9.55h2.33V.19H3.77l-.01 2.3h9.54L.94 14.85l1.67 1.66Z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </section >
  )
}

export default Portfolio;