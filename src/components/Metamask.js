import { useState } from "react";
import { ethers } from "ethers";
import "./Metamask.css";

function Metamask() {
  const [data, setData] = useState({
    address: "",
    Balance: null,
  });

  const btnhandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]));
    } else {
      alert("install metamask extension!");
    }
  };

  const getbalance = (address) => {
    window.ethereum
      .request({
        method: "eth_getbalance",
        params: [address, "latest"],
      })
      .then((balance) => {
        setData({
          Balance: ethers.utils.formatEther(balance),
        });
      });
  };

  const accountChangeHandler = (account) => {
    setData({
      address: account,
    });

    getbalance(account);
  };

  return (
    <div className="metamask">
      <strong>Address: </strong>
      {data.address}
      {/* <Card.Text>
            <strong>Balance: </strong>
            {data.Balance}
          </Card.Text> */}
      <div className="wallet">
        <a onClick={btnhandler}>Connect to Metamask🦊</a>
      </div>
      {/* <Button onClick={btnhandler} variant="dark">
        Connect to Metamask🦊
      </Button> */}
    </div>
  );
}

export default Metamask;
