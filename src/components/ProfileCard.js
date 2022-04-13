import React from "react";
import "./ProfileCard.css";

function ProfileCard({ title, imageUrl, body, tokenId }) {
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
        <br />
          <p>{body}</p>
          <br />
          <p>{tokenId}</p>
        </div>
        {/* <div className="card-body">
          <p>{tokenId}</p>
        </div> */}
      </div>
    </div>
  );
}

export default ProfileCard;
