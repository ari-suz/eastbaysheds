import React from "react";
import { Link } from "react-router-dom";
import "../css/header.css";

const Nav = () => {
  return (
    <header className="sticky-header">
      <Link to="/">
        <h2>East Bay Sheds</h2>
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/about">About</Link>
        <Link to="/ourwork">Our Work</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </header>
  );
}

export default Nav;