import React from "react";
import './SearchForm.css'

function SearchForm() {
  return (
    <form className="search-form">
      <div className="search-form__box">
        <input className="search-form__input" placeholder="Фильм"></input>
        <button className="search-form__button">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none">
            <path fill="#fff" fillRule="evenodd" d="M12.8 12.26a3.67 3.67 0 1 1-5.2-5.18 3.67 3.67 0 0 1 5.2 5.18Zm.43 1.39a5 5 0 1 1 .95-.95l3.56 3.57-.94.94-3.57-3.56Z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <label className="search-form__label" htmlFor="shortfilm">
        <input className="search-form__radio" type="checkbox" name="shortfilm-switch" id="shortfilm" value="shortfilm"/>
        <div className="search-form__switch-item">
          <span className="switch-item__circle"></span>
        </div>
        <span className="switch-item__label-text">Короткометражки</span>
      </label>
    </form>
  )
}

export default SearchForm;