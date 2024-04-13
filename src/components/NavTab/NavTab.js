import React from "react";
import './NavTab.css'

function NavTab() {
  return (
    <div className="promo__navtab-container">
      <nav className="promo__nav">
        <ul className="promo__navlist">
          <li className="promo__navlist-item">
            <a href="#about" className="promo__nav-link">О проекте</a>
          </li>
          <li className="promo__navlist-item">
            <a href="#techs" className="promo__nav-link">Технологии</a>
          </li>
          <li className="promo__navlist-item">
            <a href="#student" className="promo__nav-link">Студент</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavTab;