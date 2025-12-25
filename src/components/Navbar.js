import { useState } from "react";
import { Link } from "react-router-dom";
import useActivityMeter from "./useActivityMeter";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { points } = useActivityMeter();

  return (
    <nav className="navbar">
      <div className="nav-left">
  <NavLink to="/" end data-activity="true" onClick={() => setMenuOpen(false)}>Home</NavLink>
  <NavLink to="/education" data-activity="true" onClick={() => setMenuOpen(false)}>Education</NavLink>
  <NavLink to="/projects" data-activity="true" onClick={() => setMenuOpen(false)}>Projects</NavLink>
  <NavLink to="/experience" data-activity="true" onClick={() => setMenuOpen(false)}>Experience</NavLink>
</div>


      <div className="nav-right">
        <NavLink to="/connect" data-activity="true" onClick={() => setMenuOpen(false)}>Connect with me</NavLink>

        {/* 🔋 Activity Meter */}
        {/* 🔋 Credit Meter */}
<div className="credit-meter-wrapper">
  <div className="credit-meter">
    <div
      className="credit-needle"
      style={{ transform: `rotate(${(points / 100) * 180 - 90}deg)` }}
    />
  </div>

  {/* Hover Tooltip */}
  <div className="credit-tooltip">
    Credits left: {points}%
  </div>
</div>

      </div>

      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/education" onClick={() => setMenuOpen(false)}>Education</Link>
        <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
        <Link to="/experience" onClick={() => setMenuOpen(false)}>Experience</Link>
        <Link to="/connect" onClick={() => setMenuOpen(false)}>Connect with me</Link>
      </div>
    </nav>
  );
}

export default Navbar;
