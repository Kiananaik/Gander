import React, { Component } from "react";
import Directory from "./components/Directory/Directory";
import logo from "./ganderLogo.svg";
import "./App.css";

function App() {
  
  return (
    <div className="App">

      <div className="App-header">

        <div className="header">

        Let's Take a <img src={logo} className="App-logo" alt="logo" /> at some Games...

        </div>

      </div>

      <Directory></Directory>
      
    </div>
  );
}


export default App;
