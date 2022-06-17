import "./App.css";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import TimerProvider from "./context/TimerProvider";
import Timer from "./components/Timer/Timer";
import BouncyLink from "./components/BouncyLink";

function App() {
  return (
    <TimerProvider>
      <div className="app">
        <Timer/>
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
    </TimerProvider>
  );
}

export default App;
