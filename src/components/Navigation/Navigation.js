import React from "react";
import { NavLink, Link } from "react-router-dom";
import './Navigation.css'


function Navigation({ isOpen, closeHandler }) {
  return (
    <div className={`nav__overlay ${isOpen ? "nav__overlay_visible" : ""}`}>
      <div className={`nav__sidebar ${isOpen ? "nav__sidebar_visible" : "nav__sidebar_hidden"}`}>
        <svg className="nav__sidebar-close" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" onClick={closeHandler}>
          <path fill="#000" d="m7.16 9.28 2.12-2.12 15.56 15.56-2.13 2.12z" />
          <path fill="#000" d="m22.72 7.16 2.12 2.12L9.28 24.84l-2.12-2.12z" />
        </svg>
        <nav className="nav__links">
          <NavLink to="/" className="nav__link-item">Главная</NavLink>
          <NavLink to="/movies" className="nav__link-item">Фильмы</NavLink>
          <NavLink to="/saved-movies" className="nav__link-item">Сохранённые фильмы</NavLink>
        </nav>
        <Link to="/profile">
          <button className="nav__account-btn">Аккаунт</button>
        </Link>
      </div>
    </div>
  )
}

export default Navigation;