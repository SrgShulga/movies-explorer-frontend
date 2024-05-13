import { useContext, useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import './Movies.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import moviesApi from "../../utils/MoviesApi";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { filterMovies, filterShortMovies, validateMovieData } from "../../utils/utils";

function Movies({ setIsLoader, setInfoPopup, savedMoviesList, onClickLike, onClickDelete, loggedIn }) {
  const currentUser = useContext(CurrentUserContext);

  const [shortMovies, setShortMovies] = useState(false);
  const [initialMovies, setInitialMovies] = useState([]);
  const [isAllMovies, setIsAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [NotFound, setNotFound] = useState(false);

  function handleSearchMovies(inputValue) {
    localStorage.setItem(`${currentUser.email} - movieSearch`, inputValue);
    localStorage.setItem(`${currentUser.email} - shortMovies`, shortMovies);

    if (isAllMovies.length === 0) {
      setIsLoader(true);
      moviesApi.getMovies()
        .then(movies => {
          setIsAllMovies(movies);
          handleRenderFilteredMovies(
            validateMovieData(movies),
            inputValue,
            shortMovies
          );
        })
        .catch(() =>
          setInfoPopup({
            isOpen: true,
            successful: false,
            text: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
          })
        )
        .finally(() => setIsLoader(false));
    } else {
      handleRenderFilteredMovies(isAllMovies, inputValue, shortMovies);
    }
  }

  function handleRenderFilteredMovies(movies, userQuery, shortMoviesCheckbox) {
    const moviesList = filterMovies(movies, userQuery, shortMoviesCheckbox)
    if (moviesList.length === 0) {
      setInfoPopup({
        isOpen: true,
        successful: false,
        text: 'Ничего не найдено.',
      });
      setNotFound(true);
    } else {
      setNotFound(false);
    }
    setInitialMovies(moviesList);
    setFilteredMovies(
      shortMoviesCheckbox ? filterShortMovies(moviesList) : moviesList
    );
    localStorage.setItem(
      `${currentUser.email} - movies`,
      JSON.stringify(moviesList)
    );
  }

  useEffect(() => {
    if (localStorage.getItem(`${currentUser.email} - shortMovies`) === 'true') {
      setShortMovies(true);
    } else {
      setShortMovies(false);
    }
  }, [currentUser]);

  useEffect(() => {
    if (localStorage.getItem(`${currentUser.email} - movies`)) {
      const movies = JSON.parse(
        localStorage.getItem(`${currentUser.email} - movies`)
      );
      setInitialMovies(movies);
      if (
        localStorage.getItem(`${currentUser.email} - shortMovies`) === 'true'
      ) {
        setFilteredMovies(filterShortMovies(movies));
      } else {
        setFilteredMovies(movies);
      }
    }
  }, [currentUser]);

  function handleCheckShortMovies() {
    setShortMovies(!shortMovies);
    if (!shortMovies) {
      setFilteredMovies(filterShortMovies(initialMovies));
    } else {
      setFilteredMovies(initialMovies);
    }
    localStorage.setItem(`${currentUser.email} - shortMovies`, !shortMovies);
  }

  return (
    <>
      <Header loggedIn={loggedIn} modifier={'profile'} />
      <section className="movies">
        <div className="movies__container">
          <SearchForm
            handleSearchMovies={handleSearchMovies}
            handleCheckShortMovies={handleCheckShortMovies}
            shortMovies={shortMovies}
          />
          {!NotFound && (
            <MoviesCardList
              moviesArr={filteredMovies}
              savedMoviesList={savedMoviesList}
              onClickLike={onClickLike}
              onClickDelete={onClickDelete}
            />
          )}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Movies;