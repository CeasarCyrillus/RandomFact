import React from "react";
import "./Header.css"

export const Header = () => {
  const now = new Date();
  const currentWeekDay = weekDays[now.getDay()];
  const currentDate = now.toLocaleDateString();
  return(
    <div className={"header-wrapper"}>
      <header className={"primary-header"}>
        <h1 className={"header-text"}>
          Random Fact
          <i className="fas fa-random header-icon"/>
        </h1>
      </header>
      <header className={"secondary-header"}>
        <h3 className={"header-text"}>{`${currentWeekDay} ${currentDate}`}
          <i className="far fa-calendar-alt header-icon"/>
        </h3>
      </header>
    </div>
    )

}
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];