import React from "react";
import Header from "../Header/Header";
import './Profile.css'
import Input from "../Input/Input";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <>
      <Header isAuth={true} modifier={'profile'} /><section className="profile">
        <div className="profile__container">
          <h1 className="profile__username">Привет, Виталий!</h1>
          <form className="profile__form">
            <fieldset className="form__inputs">
              <Input
                name="name"
                label="Имя"
                type="text"
                modifier="profile"
                placeholder="Виталий"
              ></Input>
              <Input
                name="email"
                label="E-mail"
                type="email"
                modifier="profile"
                placeholder="pochta@yandex.ru"
              ></Input>
            </fieldset>
            <div className="form__buttons">
              <button className="form__btn form__btn_type_edit" type="submit">Редактировать</button>
              <Link className="form__link" to="/signin">
                <div className="form__btn form__btn_type_signout">Выйти из аккаунта</div>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Profile;