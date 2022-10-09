import React from "react";
import Buttons from "./components/Buttons/Buttons.jsx";
import Nav from "./components/Nav/Nav.jsx";
import './App.css';

function App() {
  return (
    <section className="container">
      <Nav />
      <div className="button-container">
    <h1>Buttons</h1>
    <Buttons />
    </div>
    </section>
  );
}

export default App;
