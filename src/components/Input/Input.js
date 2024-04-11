import React from "react";
import './Input.css'

function Input({name, label, error, modifier, ...rest}) {
  return (
    <>
      <div className={`input__container input__container_type_${modifier}`}>
        <label
          className={`input__label input__label_type_${modifier}`}
          htmlFor={name}
        >
          {label}
        </label>
        <input
          className={`form__input form__input_type_${modifier}`}
          id={name}
          name={name}
          {...rest}
        />
      </div>
      <span className={`input__error input__error_type_${modifier}`}>
        {error}
      </span>
    </>
  );
}

export default Input;