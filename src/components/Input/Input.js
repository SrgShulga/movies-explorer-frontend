import React from "react";
import './Input.css'

function Input(props) {
  return (
    <>
      <div className={`input__container input__container_type_${props.modifier}`}>
        <label
          className={`input__label input__label_type_${props.modifier}`}
          htmlFor={props.name}
        >
          {props.label}
        </label>
        <input
          className={`form__input form__input_type_${props.modifier}`}
          autoComplete="off"
          id={props.name}
          name={props.name}
          {...props}
        />
      </div>
      <span className={`input__error input__error_type_${props.modifier}`}>
        {props.error}
      </span>
    </>
  );
}

export default Input;