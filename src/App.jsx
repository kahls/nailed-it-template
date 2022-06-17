import "./App.css";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import BouncyLink from "./components/BouncyLink";

function App() {
  return (
    <div className="app">
      <nav className="app-nav">
        <BouncyLink>
          <Link to="/">Home</Link>
        </BouncyLink>
        <BouncyLink>
          <Link to="/objective">Objective</Link>
        </BouncyLink>
        <BouncyLink>
          <Link to="/teams">Teams</Link>
        </BouncyLink>
        <BouncyLink>
          <Link to="/thanks">Thank You</Link>
        </BouncyLink>
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
