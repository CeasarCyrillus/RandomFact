import React from "react";
import "./Button.css";

interface Props {
  direction: "left" | "right";
  onClick: () => void;
}

export const Button = (props: Props) =>
  (
    <span className={"post-button"} onClick={() => {
      props.onClick()
    }}>
      <i className={`fas fa-chevron-${props.direction}`}/>
    </span>
  )