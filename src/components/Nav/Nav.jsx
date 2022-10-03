import React from "react";
import './Nav.css';

function Nav() {
  return (
    <nav className="nav">
    <h5><span className="red">Dev</span>Challenges.io</h5>
      <ul className="nav--list">
        <li>Colors</li>
        <li>Typography</li>
        <li>Spaces</li>
        <li>Buttons</li>
        <li>Inputs</li>
        <li>Grid</li>
      </ul>
    </nav>
  );
}

export default Nav;
