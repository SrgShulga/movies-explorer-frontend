import { useEffect, useState } from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
import useScreenWidth from "../../utils/screenParams";
import { DEVICE_WIDTHS } from "../../utils/constants";

function MoviesCardList({ moviesArr, savedMoviesList, onClickLike, onClickDelete }) {
  const location = useLocation();
  const screenWidth = useScreenWidth();

  const [isMount, setIsMount] = useState(true);
  const [showMovieList, setShowMovieList] = useState([]);
  const [cardsShowDetails, setCardsShowDetails] = useState({ total: 16, more: 4 });
  const { desktop, tablet, mobile } = DEVICE_WIDTHS;

  useEffect(() => {
    if (location.pathname === '/movies') {
      if (screenWidth > desktop.width) {
        setCardsShowDetails(desktop.cards);
      } else if (screenWidth <= desktop.width && screenWidth > mobile.width) {
        setCardsShowDetails(tablet.cards);
      } else {
        setCardsShowDetails(mobile.cards);
      }
      return () => setIsMount(false);
    }
  }, [screenWidth, isMount, desktop, tablet, mobile, location.pathname]);

  useEffect(() => {
    if (moviesArr.length) {
      const res = moviesArr.filter((item, i) => i < cardsShowDetails.total);
      setShowMovieList(res);
    }
  }, [moviesArr, cardsShowDetails.total]);

  function handleShowMoreMovies() {
    const start = showMovieList.length;
    const end = start + cardsShowDetails.more;
    const additional = moviesArr.length - start;

    if (additional > 0) {
      const newCards = moviesArr.slice(start, end);
      setShowMovieList([...showMovieList, ...newCards]);
    }
  }

  function getSavedMovieCard(arr, movie) {
    return arr.find((item) => {
      return item.movieId === (movie.id || movie.movieId);
    });
  }

  return (
    <>
      <ul className="moviescard-list">
        {showMovieList.map((movie) => (
          <MoviesCard
            key={movie.id || movie._id}
            movie={movie}
            liked={getSavedMovieCard(savedMoviesList, movie)}
            onClickLike={onClickLike}
            onClickDelete={onClickDelete} />
        ))}
      </ul>
      {location.pathname === '/movies' && showMovieList.length >= 5 && showMovieList.length < moviesArr.length && (
        <div className="movies__btn-container">
          <button className="movies__more-button" type="button" onClick={handleShowMoreMovies}>Ещё</button>
        </div>
      )}
    </>
  )
}

export default MoviesCardList;