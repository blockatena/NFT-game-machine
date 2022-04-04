import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="metamask">
        <Link to="/metamask" className="metamask-link">
          Connect to Metamask🦊
        </Link>
      </div>
      <Link to="/">
        <h1 className="logo">
          NFT GAME MACHINE<p>-BY BLOCKATENA</p>
        </h1>
      </Link>
      <div className="nav-links">
        <Link to="/profile" className="links">
          PROFILE
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
