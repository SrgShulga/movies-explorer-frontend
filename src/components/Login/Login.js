import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.css"
import Input from "../Input/Input";
import useFormValidation from "../../utils/formValidation";

function Login({ handleLogin }) {

  const { values, errors, isValid, handleChange, resetFormValues } = useFormValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    handleLogin(values);
  }

  useEffect(() => {
    resetFormValues()
  }, [resetFormValues])

  return (
    <section className="auth__page">
      <div className="auth__container">
        <div className="homepage__link">
          <Link to='/#'>
            <svg className="homepage__link-logo" xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="none">
              <path fill="#2BE080" d="M0 12.667c0-4.434 0-6.651.863-8.344a7.917 7.917 0 0 1 3.46-3.46C6.016 0 8.233 0 12.667 0h12.666c4.434 0 6.651 0 8.344.863 1.49.759 2.701 1.97 3.46 3.46C38 6.016 38 8.233 38 12.667v12.666c0 4.434 0 6.651-.863 8.344a7.917 7.917 0 0 1-3.46 3.46c-1.693.863-3.91.863-8.344.863H12.667c-4.434 0-6.651 0-8.344-.863a7.917 7.917 0 0 1-3.46-3.46C0 31.984 0 29.767 0 25.333V12.667Z" />
              <circle cx="19" cy="19" r="11" fill="#fff" />
              <path fill="#2BE080" fillRule="evenodd" d="M15.154 19a3.846 3.846 0 1 0 7.692 0H25a6 6 0 0 1-12 0h2.154Z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
        <h1 className="auth__title">Рады видеть!</h1>
        <form className="auth__form" name="login" onSubmit={handleSubmit} noValidate>
          <fieldset className="login__fieldset">
            <Input
              onChange={handleChange}
              modifier="auth"
              errorClassName={errors.email ? 'form__input-error' : ''}
              name="email"
              label="E-mail"
              type="email"
              value={values.email || ''}
              required
              placeholder="pochta@yandex.ru"
              error={errors.email || ''}
            ></Input>
            <Input
              onChange={handleChange}
              modifier="auth"
              errorClassName={errors.password ? 'form__input-error' : ''}
              name="password"
              label="Пароль"
              type="password"
              value={values.password || ''}
              minLength="8"
              maxLength="20"
              required
              placeholder="••••••••••••••"
              error={errors.password || ''}
            ></Input>
          </fieldset>
          <button className={`form__submit-btn ${!isValid && 'form__submit-btn_disabled'}`} type="submit" disabled={!isValid}>Войти</button>
        </form>
        <div className="auth__signin">
          <p className="auth__signin-text">Ещё не зарегистрированы?</p>
          <Link to='/signup' className="auth__link">Регистрация</Link>
        </div>
      </div>
    </section>
  );
}

export default Login;