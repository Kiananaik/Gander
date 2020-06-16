import React, { Component } from "react";
import Directory from "./components/Directory/Directory";
// import NavBar from "./components/NavBar/NavBar";
import logo from "./ganderLogo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        {/* <NavBar></NavBar> */}
        <div className="header">
        <img src={logo} className="App-logo" alt="logo" />Let's Take a Gander at some Games...
        </div>
      </div>
      <Directory></Directory>
    </div>
  );
}


export default App;
