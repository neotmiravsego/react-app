import React from "react";

export default function header() {
  return (
    <div className="header__component">
      <div className="header__logo">
        <a href="/">Logo</a>
      </div>
      <ul className="header__list__controls">
        <li className="list__controls__item">
          <a href="/categories">Category list</a>
        </li>
        <li className="list__controls__item">
          <a href="/login">Login</a>
        </li>
        <li className="list__controls__item">
          <a href="/reg">Registration</a>
        </li>
      </ul>
    </div>
  );
}
