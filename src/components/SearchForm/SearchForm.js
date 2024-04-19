import React, { useContext, useEffect, useState } from "react";
import './SearchForm.css'
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useLocation } from "react-router-dom";
import useFormValidation from "../../utils/formValidation";

function SearchForm({ handleSearchMovies, handleCheckShortMovies, shortMovies }) {
  const currentUser = useContext(CurrentUserContext);
  const location = useLocation();
  const { values, handleChange, isValid, setIsValid } = useFormValidation();
  const [error, setError] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault();
    isValid ? handleSearchMovies(values.search) : setError('Введите запрос');
  };

  useEffect(() => {
    setError('')
  }, [isValid]);

  useEffect(() => {
    if (location.pathname === '/movies' && localStorage.getItem(`${currentUser.email} - movieSearch`)) {
      const searchValue = localStorage.getItem(`${currentUser.email} - movieSearch`);
      values.search = searchValue;
      setIsValid(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  return (
    <form className="search-form" name="search" noValidate onSubmit={handleSubmit}>
      <div className="search-form__box">
        <input className="search-form__input" name="search" type="text" placeholder="Фильм" required onChange={handleChange} value={values.search || ''}></input>
        <button className="search-form__button" type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none">
            <path fill="#fff" fillRule="evenodd" d="M12.8 12.26a3.67 3.67 0 1 1-5.2-5.18 3.67 3.67 0 0 1 5.2 5.18Zm.43 1.39a5 5 0 1 1 .95-.95l3.56 3.57-.94.94-3.57-3.56Z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <span className="search-form__input-error">{error}</span>
      <label className="search-form__label" htmlFor="shortfilm">
        <input className="search-form__radio" type="checkbox" name="shortfilm-switch" id="shortfilm" value="shortfilm" onChange={handleCheckShortMovies} checked={shortMovies ? true : false} />
        <span className="search-form__switch-item">
          <span className="switch-item__circle"></span>
        </span>
        <span className="switch-item__label-text">Короткометражки</span>
      </label>
    </form>
  )
}

export default SearchForm;