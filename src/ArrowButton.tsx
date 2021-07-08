import React from "react";
import "./Button.css";

interface Props {
  direction: "left" | "right";
  onClick: () => void;
}

export const ArrowButton = (props: Props) =>
  <span className={"post-button"} onClick={props.onClick}>
    <i className={`far post-button-icon fa-caret-square-${props.direction}`}/>
  </span>