import React from "react";
import Buttons from "./components/Buttons/Buttons.jsx";
import Nav from "./components/Nav/Nav.jsx";
import "./App.css";

function App() {
  return (
    <section className="container">
      <Nav />
      <div className="button-container">
        <h1>Buttons</h1>
        <div className="row">
          <Buttons
            text="&lt;Button /&gt;"
            bgColor="#E0E0E0"
            color="#3F3F3F"
            btnText="Default"
            boxShadow="0px 2px 3px rgba(51, 51, 51, 0.2)"
          />
          <Buttons 
          text="&:hover, &:focus"
          bgColor="#AEAEAE"
          color="#3F3F3F"
          btnText="Default"
          boxShadow="0px 2px 3px rgba(51, 51, 51, 0.2)"
          />
        </div>
        <div className="row">
          <Buttons
          text="&lt;Button variant='outline'/&gt;"
          bgColor="#fff"
          color="#3D5AFE"
          btnText="Default"
          border="1px solid #3D5AFE"
          />
          <Buttons 
          text="&:hover, &:focus"
          bgColor="rgba(41, 98, 255, 0.1)"
          color="#3D5AFE"
          btnText="Default"
          border="1px solid #3D5AFE"
          />
        </div>
        <div className="row">
          <Buttons 
          text="&lt;Button variant='text'/&gt;"
          bgColor="#fff"
          color="#3D5AFE"
          btnText="Default"
          border="none"
          />
          <Buttons 
          text="&:hover, &:focus"
          bgColor="rgba(41, 98, 255, 0.1)"
          color="#3D5AFE"
          btnText="Default"
          border="none"
          />
        </div>
        <div className="row">
          <Buttons 
          text="&lt;Button disableShadow/&gt;"
          bgColor="#3D5AFE"
          color="#FFFFFF"
          btnText="Default"
          border="none"
          />
        </div>
      </div>
    </section>
  );
}

export default App;
