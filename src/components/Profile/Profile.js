import React from "react";
import Header from "../Header/Header";
import './Profile.css'
import Input from "../Input/Input";

function Profile () {
  return (
    <section className="profile">
      <Header isAuth={true} modifier={'profile'}/>
      <div className="profile__container">
        <h2 className="profile__username">Привет, Виталий!</h2>
        <form className="profile__form">
          <fieldset className="form__inputs">
            <Input 
              name="name"
              label="Имя"
              type="text"
              modifier={'profile'}
            ></Input>
            <Input 
              name="email"
              label="E-mail"
              type="email"
              modifier={'profile'}
            ></Input>
          </fieldset>
          <div className="form__buttons">
            <button className="form__btn form__btn_type_edit">Редактировать</button>
            <button className="form__btn form__btn_type_signout">Выйти из аккаунта</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Profile;