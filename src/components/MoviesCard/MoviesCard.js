import './MoviesCard.css'
import { useLocation } from "react-router-dom";
import { transformDuration } from "../../utils/utils";

function MoviesCard({ movie, liked, onClickLike, onClickDelete }) {
  const location = useLocation();

  function handleLikeMovie() {
    onClickLike(movie);
  }

  function handleDeleteMovie() {
    onClickDelete(movie)
  }

  return (
    <li className="movie-card__item">
      <a href={movie.trailerLink} target='_blank' rel='noreferrer'>
        <img src={movie.image} className="movie-card__image" alt={movie.nameRU}></img>
      </a>
      <div className="moive-card__info-container">
        <div className="movie-card__title-container">
          <h3 className="movie-card__title">{movie.nameRU}</h3>
          {location.pathname === '/movies' ? (
            <button className="movie-card__save-btn" onClick={liked ? handleDeleteMovie : handleLikeMovie}>
              <span className={`btn-circle ${liked ? "btn-circle_type_green" : ""}`}></span>
            </button>
          ) : (
            <button className="movie-card__delete-btn" onClick={handleDeleteMovie}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
                <path fill="#000" fillRule="evenodd" d="m8 9 2 2 1-1-2-2 2-2-1-1-2 2-2-2-1 1 2 2-2 2 1 1 2-2Z" clipRule="evenodd" />
              </svg>
            </button>
          )}
        </div>
        <p className="movie-card__duration">{transformDuration(movie.duration)}</p>
      </div>
    </li>
  )
}

export default MoviesCard;