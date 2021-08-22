import React from "react";
import Footer from "./Footer";
import dashboard from "../../assets/dashboard.png";
const Dashboard = () => {
  return (
    <div className="dashboard__body">
      <div className="dashboard__content">
        <img src={dashboard} style={{ height: "520px", width: "320px" }} />
      </div>
      <Footer />
    </div>
  );
};
export default Dashboard;
