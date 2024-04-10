import React, { useContext, useState } from "react";
import './MoviesCard.css'
import savedPageContext from "../../contexts/savedPageContext";

function MoviesCard({ title, duration, imageUrl }) {

  const { onSavedPage } = useContext(savedPageContext);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => setIsSaved(!isSaved);
  const handleDelete = () => { console.log('карточка удалена') };

  return (
    <li className="movie-card__item">
      <img src={imageUrl} className="movie-card__image" alt="Превью фильма"></img>
      <div className="moive-card__info-container">
        <div className="movie-card__title-container">
          <h3 className="movie-card__title">{title}</h3>
          {!onSavedPage ? (
            <button className="movie-card__save-btn" onClick={handleSave}>
              <div className={`btn-circle ${isSaved ? "btn-circle_type_green" : ""}`}></div>
            </button>
          ) : (
            <button className="movie-card__delete-btn" onClick={handleDelete}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
                <path fill="#000" fillRule="evenodd" d="m8 9 2 2 1-1-2-2 2-2-1-1-2 2-2-2-1 1 2 2-2 2 1 1 2-2Z" clipRule="evenodd" />
              </svg>
            </button>
          )}
        </div>
        <p className="movie-card__duration">{duration}</p>
      </div>
    </li>
  )
}

export default MoviesCard;