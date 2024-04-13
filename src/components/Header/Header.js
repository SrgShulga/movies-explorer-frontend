import React, { useState } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header(props) {
  const [isNavigationOpened, setNavigationOpened] = useState(false);

  const navigationHandler = () => setNavigationOpened(!isNavigationOpened);

  const location = useLocation();

  return (
    <>
      <header className={`header header_type_${props.modifier}`}>
        <div className="header__container">
          <Link to='/' className="header__logo-navlink">
            <svg className="header__logo" xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="none">
              <path fill="#2BE080" d="M0 12.667c0-4.434 0-6.651.863-8.344a7.917 7.917 0 0 1 3.46-3.46C6.016 0 8.233 0 12.667 0h12.666c4.434 0 6.651 0 8.344.863 1.49.759 2.701 1.97 3.46 3.46C38 6.016 38 8.233 38 12.667v12.666c0 4.434 0 6.651-.863 8.344a7.917 7.917 0 0 1-3.46 3.46c-1.693.863-3.91.863-8.344.863H12.667c-4.434 0-6.651 0-8.344-.863a7.917 7.917 0 0 1-3.46-3.46C0 31.984 0 29.767 0 25.333V12.667Z" />
              <circle cx="19" cy="19" r="11" fill="#fff" />
              <path fill="#2BE080" fillRule="evenodd" d="M15.154 19a3.846 3.846 0 1 0 7.692 0H25a6 6 0 0 1-12 0h2.154Z" clipRule="evenodd" />
            </svg>
          </Link>
          {props.isAuth ? (
            <div className={`header__nav-links header__nav-links_type_${props.modifier}`}>
              <a href="/movies" className={`header__nav-link header__nav-link_type_${props.modifier}`}>Фильмы</a>
              <a href="/saved-movies" className={`header__nav-link header__nav-link_type_${props.modifier}`}>Сохранённые фильмы</a>
            </div>
          ) : (
            <></>
          )}
          <div className="header__account-controllers">
            {props.isAuth ? (
              <Link to='/profile' className="header__link-item">
                <div className={`header__account-btn header__account-btn_type_authorized header__account-btn_type_${props.modifier}`}>
                  Аккаунт
                </div>
              </Link>
            ) : (
              <>
                <Link to='/signup' className="header__link-item">
                  <div className="header__account-btn header__account-btn_type_text">Регистрация</div>
                </Link>
                <Link to='/signin' className="header__link-item">
                  <div className="header__account-btn header__account-btn_type_color">Войти</div>
                </Link>
              </>
            )}
          </div>
          {props.isAuth && (
            (location.pathname === '/') ? (
              <svg className="header__burger-menu" xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="none" onClick={navigationHandler}>
                <path fill="#fff" fillRule="evenodd" d="M36 14H8v-3h28v3ZM36 24H8v-3h28v3ZM36 34H8v-3h28v3Z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="header__burger-menu" xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="none" onClick={navigationHandler}>
                <path fill="#000" fillRule="evenodd" d="M36 14H8v-3h28v3ZM36 24H8v-3h28v3ZM36 34H8v-3h28v3Z" clipRule="evenodd" />
              </svg>
            ))
          }
        </div>
      </header>
      <Navigation isOpen={isNavigationOpened} closeHandler={navigationHandler}></Navigation>
    </>
  )
}

export default Header;