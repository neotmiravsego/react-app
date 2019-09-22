import React from "react";
import FormGroup from "./formGroup";

export default function form() {
  return (
    <div className="form__wrap">
      <h1 className="form__title">Registration</h1>
      <div className="form__group__list__item">
        <FormGroup label="Username"></FormGroup>
      </div>
      <div className="form__group__list__item">
        <FormGroup label="Email"></FormGroup>
      </div>
      <div className="form__group__list__item">
        <FormGroup label="Phone"></FormGroup>
      </div>
      <div className="form__group__list__item">
        <FormGroup label="Password"></FormGroup>
      </div>
      <div className="privacy-policy">
        <input type="checkbox" className="confirmed" />
        <p className="privacy-policy__txt">
          I have read the
          <span className="privacy-policy_green">privacy policy</span>.
        </p>
      </div>
      <button className="form__button">Sumbit</button>
    </div>
  );
}
