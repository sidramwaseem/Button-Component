import React from "react";
import Buttons from "./components/Buttons/Buttons.jsx";
import Nav from "./components/Nav/Nav.jsx";

function App() {
  return (
    <section className="container">
      <div className="row">
        <div className="col-2 col-sm-2 col-lg-2">
          <Nav />
        </div>
        <div className="col-10 col-sm-10 col-lg-10">
          <Buttons />
        </div>
      </div>
    </section>
  );
}

export default App;
