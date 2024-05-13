import { useContext, useEffect, useState } from "react";
import './SavedMovies.css'
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { filterMovies, filterShortMovies } from '../../utils/utils';

function SavedMovies({ onClickDelete, savedMoviesList, setInfoPopup, loggedIn }) {
  const currentUser = useContext(CurrentUserContext);

  const [showedMovies, setShowedMovies] = useState(savedMoviesList);
  const [filteredMovies, setFilteredMovies] = useState(showedMovies);
  const [shortMovies, setShortMovies] = useState(false);
  const [NotFound, setNotFound] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(`${currentUser.email} - shortSavedMovies`) === 'true') {
      setShortMovies(true);
      setShowedMovies(filterShortMovies(savedMoviesList));
    } else {
      setShortMovies(false);
      setShowedMovies(savedMoviesList);
    }
  }, [savedMoviesList, currentUser]);

  useEffect(() => {
    setFilteredMovies(savedMoviesList);
    savedMoviesList.length !== 0 ? setNotFound(false) : setNotFound(true);
  }, [savedMoviesList]);

  function handleSearchMovies(inputValue) {
    const moviesList = filterMovies(savedMoviesList, inputValue, shortMovies);
    if (moviesList.length === 0) {
      setNotFound(true);
      setInfoPopup({
        isOpen: true,
        successful: false,
        text: 'Ничего не найдено.',
      });
    } else {
      setNotFound(false);
      setFilteredMovies(moviesList);
      setShowedMovies(moviesList);
    }
  }

  function handleShortFilms() {
    if (!shortMovies) {
      setShortMovies(true);
      localStorage.setItem(`${currentUser.email} - shortSavedMovies`, true);
      setShowedMovies(filterShortMovies(filteredMovies));
      filterShortMovies(filteredMovies).length === 0 ? setNotFound(true) : setNotFound(false);
    } else {
      setShortMovies(false);
      localStorage.setItem(`${currentUser.email} - shortSavedMovies`, false);
      filteredMovies.length === 0 ? setNotFound(true) : setNotFound(false);
      setShowedMovies(filteredMovies);
    }
  }

  return (
    <>
      <Header loggedIn={loggedIn} modifier={'profile'} />
      <section className="saved-movies-page">
        <div className="movies__container movies__container_type_saved-page">
          <SearchForm
            handleSearchMovies={handleSearchMovies}
            handleCheckShortMovies={handleShortFilms}
            shortMovies={shortMovies}
          />
          {!NotFound && (
            <MoviesCardList
              moviesArr={showedMovies}
              savedMoviesList={savedMoviesList}
              onClickDelete={onClickDelete}
            />
          )}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default SavedMovies;