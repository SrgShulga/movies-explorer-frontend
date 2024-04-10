import React from "react";
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__info">
          <p className="footer__copyright">© 2024</p>
          <div className="footer__links">
            <a href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer" className="link">Яндекс.Практикум</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="link">Github</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;