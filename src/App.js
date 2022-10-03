import React from "react";
import Buttons from "./components/Buttons/Buttons.jsx";
import Nav from "./components/Nav/Nav.jsx";
import './App.css';

function App() {
  return (
    <section className="container">
      <Nav />

      <Buttons />
    </section>
  );
}

export default App;
