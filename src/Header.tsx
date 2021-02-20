import React from "react";
import "./Header.css"

export const Header = () => {
  const today = new Date().toLocaleDateString()
  return(
    <div className={"header-wrapper"}>
      <header className={"primary-header"}>
        <h1 className={"header-text"}>Fun Fact</h1>
      </header>
      <header className={"secondary-header"}>
        <h3 className={"header-text"}>{today}</h3>
      </header>
    </div>
    )

}