import React from "react";
import './NavTab.css'

function NavTab() {
  return (
    <div className="navtab__container">
      <nav className="promo__nav">
        <a href="#about" className="promo__nav-link">О проекте</a>
        <a href="#techs" className="promo__nav-link">Технологии</a>
        <a href="#student" className="promo__nav-link">Студент</a>
      </nav>
    </div>
  )
}

export default NavTab;