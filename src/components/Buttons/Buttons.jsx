import React from "react";
import "./Buttons.css";

function Buttons(props) {
  return (
    <aside>
      <p className="btn-head" style={{color:props.pColor}}>{props.text}</p>
      <button
        className={props.class}
        style={{
          backgroundColor: props.bgColor,
          color: props.color,
          border: props.border,
          boxShadow: props.boxShadow,
          cursor: props.cursor,
          width:props.width,
          height:props.height,
          display:'flex',
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center'
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
