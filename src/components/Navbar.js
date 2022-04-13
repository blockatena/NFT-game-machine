import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Metamask from "./Metamask";

function Navbar() {
  return (
    <div className="navbar">
      <div className="metamask-link">
        <Metamask />
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
