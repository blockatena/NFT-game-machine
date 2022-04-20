// import { useState } from "react";
import "./Metamask.css";
import { useMoralis } from "react-moralis";

function Metamask() {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis();

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: "Log in using Moralis" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const logOut = async () => {
    await logout();
    console.log("logged out");
  };

  return (
    <div className="metamask">
      <div className="wallet">
        <a isLoading={isAuthenticating} onClick={login}>
          Connect to Metamask🦊
        </a>
      </div>
    </div>
  );
}

export default Metamask;
