import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Import the CSS file

function Nav() {
  return (
    <nav className="navbar">
      <div className="nav">
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/project" className="nav-link">Project</Link>
      </div>
    </nav>
  );
}

export default Nav;