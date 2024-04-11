import React from "react";
import { useNavigate } from "react-router-dom"
import './NotFound.css'

function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="not-found">
      <div className="not-found__container">
        <div className="not-found__text">
          <p className="not-found__error">404</p>
          <h1 className="not-found__title">Страница не найдена</h1>
        </div>
        <button className="not-found__return" onClick={() => { navigate(-1) }}>Назад</button>
      </div>
    </section>
  )
}

export default NotFound;