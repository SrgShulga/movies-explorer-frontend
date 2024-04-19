import React, { useContext, useEffect } from "react";
import './Profile.css'
import Input from "../Input/Input";
import useFormValidation from "../../utils/formValidation";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";

function Profile({ handleSignOut, handleUpdateProfile, loggedIn, }) {

  const { values, errors, isValid, handleChange, resetFormValues } = useFormValidation();
  const currentUser = useContext(CurrentUserContext);

  function handleSubmit(evt) {
    evt.preventDefault();
    handleUpdateProfile(values);
  }

  useEffect(() => {
    if (currentUser) {
      resetFormValues(currentUser, {}, true)
    }
  }, [currentUser, resetFormValues]);

  const changeProfileAbility = (!isValid || (currentUser.name === values.name && currentUser.email === values.email));

  return (
    <>
      <Header loggedIn={loggedIn} modifier={'profile'} />
      <section className="profile">
        <div className="profile__container">
          <h1 className="profile__username">{`Привет, ${currentUser.name || ''}!`}</h1>
          <form className="profile__form" name="profile" onSubmit={handleSubmit} noValidate>
            <fieldset className="form__inputs">
              <Input
                onChange={handleChange}
                modifier="profile"
                errorClassName={errors.name ? 'form__input-error' : ''}
                containerErrorClassName={errors.name ? 'input__container-error' : ''}
                name="name"
                label="Имя"
                type="text"
                value={values.name || ''}
                placeholder="Ваше имя"
                pattern="^[а-яА-ЯёЁa-zA-Z \s \-]+$"
                required
                minLength="2"
                maxLength="30"
                error={errors.name || ''}
              ></Input>
              <Input
                onChange={handleChange}
                modifier="profile"
                errorClassName={errors.email ? 'form__input-error' : ''}
                containerErrorClassName={errors.email ? 'input__container-error' : ''}
                name="email"
                label="E-mail"
                type="email"
                value={values.email || ''}
                placeholder="pochta@yandex.ru"
                error={errors.email || ''}
              ></Input>
            </fieldset>
            <div className="form__buttons">
              <button className={`form__btn form__btn_type_edit ${changeProfileAbility ? 'form__btn-disabled' : ''}`} disabled={changeProfileAbility ? true : false} type="submit">Редактировать</button>
              <button className="form__btn form__btn_type_signout" type="submit" onClick={handleSignOut}>Выйти из аккаунта</button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Profile;