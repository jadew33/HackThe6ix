import React from "react";
import Footer from "./Footer";
import account from "../../assets/account.png";
const Account = () => {
  return (
    <div className="dashboard__body">
      <div className="dashboard__content">
        <img src={account} style={{ height: "520px", width: "320px" }} />
      </div>
      <Footer />
    </div>
  );
};
export default Account;
