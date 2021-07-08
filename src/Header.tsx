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
    </div>
  )
