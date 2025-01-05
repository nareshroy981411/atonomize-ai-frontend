import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">GitHub Explorer</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Back to Search</Link>
      </div>
    </nav>
  );
};

export default Navbar;
