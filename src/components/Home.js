import React from "react";
import Card from "./Card";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <Link to="/crypto-chicken-run">
        <div className="card">
          <Card
            title="Crypto Chicken Run"
            imageUrl="crypto_chicken_logo.png"
            body="Easy and colourful game. Three.js based game with NFT's super poweres added"
          />
        </div>
      </Link>
      <Link to="/symbals">
        <div className="card">
          <Card
            title="Symbals"
            imageUrl="symbals_logo.png"
            body="Symbals is a game that has awesome UI with great sound effects."
          />
        </div>
      </Link>
    </div>
  );
}

export default Home;
