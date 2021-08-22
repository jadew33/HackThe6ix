import React from "react";
import Footer from "./Footer";
import goals from "../../assets/goals.png";
const Goals = () => {
  return (
    <div className="dashboard__body">
      <div className="dashboard__content">
        <img src={goals} style={{ height: "520px", width: "320px" }} />
      </div>
      <Footer />
    </div>
  );
};
export default Goals;
