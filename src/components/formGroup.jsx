import React from "react";

export default function formGroup(props) {
  return (
    <div className="form-group__wrap">
      <p className="form-group__label">{props.label}</p>
      <input
        type="text"
        className="form-group__input"
        placeholder={`Your ${props.label}`}
      />
    </div>
  );
}
