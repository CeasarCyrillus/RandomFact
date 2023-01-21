import React from "react";
import "./Header.css"

export const Header = () =>
  (
    <div className={"header-wrapper"}>
      <header className={"primary-header"}>
        <h1 className={"header-text"}>
          RandomFunFact.com
          <i className="fas fa-random header-icon"/>
        </h1>
      </header>
      <header className={"secondary-header"}>
        <h2 className={"secondary-header-text"}>
          The domain <b><a href={"/"}>randomfunfact.com</a></b> is for sale. Send an email for more information: <a href={"mailTo:ceasar.cyrillus@protonmail.com"}>ceasar.cyrillus@protonmail.com</a>
        </h2>
      </header>
    </div>
  )
