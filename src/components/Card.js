import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card({ title, imageUrl, body }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h2>{title}</h2>
        </div>
        <div className="card-body">
          <p>{body}</p>
        </div>
      </div>
      <div className="btn">
        <button>
          <Link to="/gameplay" className="play">
            PLAY
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Card;
