import React from "react";
// import { useState } from "react";
import "./Profile.css";
import ProfileCard from "./ProfileCard";
// import Dropdown from "./Dropdown";

function Profile() {
  // const [selected, setSelected] = useState("")
  return (
    <div className="profile">
      <div className="card">
        <ProfileCard
          title="Crypto Chicken Run"
          imageUrl="crypto_chicken_logo.png"
          body="Score: 24"
          tokenId="Token ID: 52453637325336"
        />
      </div>
      <div className="card">
        <ProfileCard
          title="Crypto Chicken Run"
          imageUrl="crypto_chicken_logo.png"
          body="Score: 42"
          tokenId="Token ID: 52453637325336"
        />
      </div>
      <div className="card">
        <ProfileCard
          title="Crypto Chicken Run"
          imageUrl="crypto_chicken_logo.png"
          body="Score: 69"
          tokenId="Token ID: 52453637325336"
        />
      </div>
      <div className="card">
        <ProfileCard
          title="Crypto Chicken Run"
          imageUrl="crypto_chicken_logo.png"
          body="Score: 12"
          tokenId="Token ID: 52453637325336"
        />
      </div>
      <div className="card">
        <ProfileCard
          title="Crypto Chicken Run"
          imageUrl="crypto_chicken_logo.png"
          body="Score: 00"
          tokenId="Token ID: 52453637325336"
        />
      </div>
      {/* <Dropdown selected={selected} setSelected={setSelected}/> */}
    </div>
  );
}

export default Profile;
