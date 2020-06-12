import React, { Component } from "react";
import Directory from "./components/Directory/Directory";
import NavBar from "./components/NavBar/NavBar";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NavBar></NavBar>
      </div>
      <Directory></Directory>
    </div>
  );
}


export default App;
