import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import TimerProvider from "./context/TimerProvider";
import DummyLink from "./components/DummyLink/DummyLink";
import Timer from "./components/Timer/Timer";


function App() {
  return (
    <TimerProvider>
      <div className="app">
        <Timer/>
        <nav className="app-nav">
          <Link to="/">Home</Link>
          <Link to="objective">Objective</Link>
          <Link to="teams">Teams</Link>
          <Link to="thanks">Thank You</Link>
        </nav>
        <div className="app-content">
          <Outlet />
        </div>
        <footer>
          <p>Credera ♥️ XD</p>
        </footer>
      </div>
    </TimerProvider>
  );
}

export default App;
