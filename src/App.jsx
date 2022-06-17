import "./App.css";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import TimerProvider from "./context/TimerProvider";
import Timer from "./components/Timer/Timer";
import BouncyLink from "./components/BouncyLink";
import { useState, useEffect } from "react";
import AutoDuplicator from "./components/AutoDuplicator/AutoDuplicator";
import DummyLink from "./components/DummyLink/DummyLink";

const DUPLICATE_INTERVAL = 5;

function App() {
  const [degrees, setDegrees] = useState(0);
  const [clearLinks, setClearLinks] = useState(false)

  const handleClick = () => {
    setClearLinks(true)
    setTimeout(() => {
      setClearLinks(false)
    }, 1000);
  }

  useEffect(() => {
    const degrees = setInterval(() => {
      setDegrees(degrees => degrees + 0.5)
      if (degrees > 360)
        setDegrees(0);
    }, 50);
  
    return () => {
      clearInterval(degrees)
    }
  }, [])
  
  return (
    <TimerProvider>
      <div className="app" style={{
        background: `linear-gradient(${degrees}deg, #91b7ff, #ffffff, #151193, red, green, brown, orange, yellow, rgb(203, 91, 179), rgb(203, 197, 197))`,
        animation: "Animation 2s ease infinite",
        backgroundSize: "200% 200%",
      }}>
        <Timer/>
        <nav className="app-nav">
          <BouncyLink>
            <Link to="/" onClick={handleClick}>Home</Link>
          </BouncyLink>
          <AutoDuplicator interval={DUPLICATE_INTERVAL + 5} clear={clearLinks}>
            <BouncyLink>
              <DummyLink textCopy={"Home"}/>
            </BouncyLink>
          </AutoDuplicator>
          <BouncyLink>
            <Link to="/objective" onClick={handleClick}>Objective</Link>
          </BouncyLink>
          <AutoDuplicator interval={DUPLICATE_INTERVAL + 12}  clear={clearLinks}>
            <BouncyLink>
              <DummyLink textCopy={"Objective"}/>
            </BouncyLink>
          </AutoDuplicator>
          <BouncyLink>
            <Link to="/teams" onClick={handleClick}>Teams</Link>
          </BouncyLink>
          <AutoDuplicator interval={DUPLICATE_INTERVAL + 3} clear={clearLinks}>
            <BouncyLink>
              <DummyLink textCopy={"Objective"}/>
            </BouncyLink>
          </AutoDuplicator>
          <BouncyLink>
            <Link to="/thanks" onClick={handleClick}>Thank You</Link>
          </BouncyLink>
          <AutoDuplicator interval={DUPLICATE_INTERVAL + 14} clear={clearLinks}>
            <BouncyLink>
              <DummyLink textCopy={"Thank You"}/>
            </BouncyLink>
          </AutoDuplicator>
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
