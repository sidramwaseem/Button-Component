import React from "react";
import "./Buttons.css";

function Buttons(props) {
  return (
    <aside>
    <p className="btn-head">{props.text}</p>
      <button style={{backgroundColor:props.bgColor, color:props.color, border:props.border,boxShadow:props.boxShadow}}>{props.btnText}</button>
    </aside>
  );
}

export default Buttons;
