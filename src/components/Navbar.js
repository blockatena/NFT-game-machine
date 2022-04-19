import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Metamask from "./Metamask";
import { MoralisProvider } from "react-moralis";

function Navbar() {
  return (
    <div className="navbar">
      <div className="metamask-link">
        <MoralisProvider
          serverUrl="https://j2g3npue8c9e.usemoralis.com:2053/server"
          appId="XsNuojfmFepcljSj1ogC65djF8XJNkhaJ9tR2jP0"
        >
          <Metamask />
        </MoralisProvider>
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
