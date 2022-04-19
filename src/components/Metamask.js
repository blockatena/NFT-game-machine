// import { useState } from "react";
// import { ethers } from "ethers";
import "./Metamask.css";
import { useMoralis } from "react-moralis";

function Metamask() {
  //   const [data, setData] = useState({
  //     address: "",
  //     Balance: null,
  //   });

  //   const btnhandler = () => {
  //     if (window.ethereum) {
  //       window.ethereum
  //         .request({ method: "eth_requestAccounts" })
  //         .then((res) => accountChangeHandler(res[0]));
  //     } else {
  //       alert("install metamask extension!");
  //     }
  //   };

  //   const getbalance = (address) => {
  //     window.ethereum
  //       .request({
  //         method: "eth_getbalance",
  //         params: [address, "latest"],
  //       })
  //       .then((balance) => {
  //         setData({
  //           Balance: ethers.utils.formatEther(balance),
  //         });
  //       });
  //   };

  //   const accountChangeHandler = (account) => {
  //     setData({
  //       address: account,
  //     });

  //     getbalance(account);
  //   };

  //MORALIS CODEBASE
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
        <a onClick={login}>Connect to Metamask🦊</a>
      </div>
    </div>
  );
}

export default Metamask;
