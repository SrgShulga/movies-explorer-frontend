import React from "react";
import { NavLink, Link } from "react-router-dom";
import './Navigation.css'


function Navigation({ isOpen, closeBurgerHandler }) {

  return (
    <div className={`app__overlay ${isOpen ? "app__overlay_visible" : ""}`}>
      <div className={`app__sidebar ${isOpen ? "app__sidebar_visible" : "app__sidebar_hidden"}`}>
        <svg className="app__sidebar-close" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" onClick={closeBurgerHandler}>
          <path fill="#000" d="m7.16 9.28 2.12-2.12 15.56 15.56-2.13 2.12z" />
          <path fill="#000" d="m22.72 7.16 2.12 2.12L9.28 24.84l-2.12-2.12z" />
        </svg>
        <nav className="app__sidebar-links">
          <NavLink to="/" className="app__sidebar-link-item">Главная</NavLink>
          <NavLink to="/movies" className="app__sidebar-link-item">Фильмы</NavLink>
          <NavLink to="/saved-movies" className="app__sidebar-link-item">Сохранённые фильмы</NavLink>
        </nav>
        <Link to="/profile" className="app__sidebar-link">
          <div className="app__sidebar-account-btn">Аккаунт</div>
        </Link>
      </div>
    </div>
  )
}

export default Navigation;