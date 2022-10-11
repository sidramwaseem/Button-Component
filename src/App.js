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
        <div className="row">
          <Buttons 
          text="&lt;Button disabled/&gt;"
          bgColor="#E0E0E0"
          color="#9E9E9E"
          btnText="Disabled"
          cursor= "not-allowed"
          border="none"
          />
          <Buttons 
          text="&lt;Button variant='text' disabled/&gt;"
          bgColor="#fff"
          color="#9E9E9E"
          btnText="Disabled"
          cursor= "not-allowed"
          border="none"
          />
        </div>

        {/* LOCAL_GROCERY_STORE ROW*/}

        <div className="row">
          <Buttons 
          text="&lt;Button startIcon='local_grocery_store'/&gt;"
          bgColor="#2962FF"
          color="#FFFFFF"
          btnText="Default"
          boxShadow="0px 2px 3px rgba(0, 49, 202, 0.2)"
          class="store-row"
          startIcon="local_grocery_store"
          />
          <Buttons 
          text="&lt;Button endIcon='local_grocery_store'/&gt;"
          bgColor="#2962FF"
          color="#FFFFFF"
          btnText="Default"
          boxShadow="0px 2px 3px rgba(0, 49, 202, 0.2)"
          class="store-row"
          endIcon="local_grocery_store"
          
          />
        </div>
      </div>
    </section>
  );
}

export default App;
