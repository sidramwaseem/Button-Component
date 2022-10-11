import React from "react";
import "./Buttons.css";

function Buttons(props) {
  return (
    <aside>
      <p className="btn-head">{props.text}</p>
      <button
        className={props.class}
        style={{
          backgroundColor: props.bgColor,
          color: props.color,
          border: props.border,
          boxShadow: props.boxShadow,
          cursor: props.cursor,
        }}
      >
        {" "}
        {props.startIcon && (
          <span className="material-symbols-outlined">{props.startIcon}</span>
        )}
        {props.btnText}
        {props.endIcon && (
          <span className="material-symbols-outlined">{props.endIcon}</span>
        )}
      </button>
    </aside>
  );
}

export default Buttons;
