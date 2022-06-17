import "./App.css";
import { Outlet } from "react-router-dom";

import BouncyLink from "./components/BouncyLink";

function App() {
  bouncify();
  return (
    <div className="app">
      <nav className="app-nav">
        <BouncyLink text="Home" to="/"></BouncyLink>
        <BouncyLink text="Objective" to="objective"></BouncyLink>
        <BouncyLink text="Teams" to="teams"></BouncyLink>
        <BouncyLink text="Thank You" to="thanks"></BouncyLink>
      </nav>
      <div className="app-content">
        <Outlet />
      </div>
      <footer>
        <p>Credera ♥️ XD</p>
      </footer>
    </div>
  );
}

export default App;
