import React from "react";
import "../../styles/sass/Age.scss";
const AgeSelection = () => {
  return (
    <div className="age__container">
      <h3>Time to create your profile!</h3>
      <label for="age">Enter your age:</label>
      <input type="text" id="age" name="age" />
    </div>
  );
};

export default AgeSelection;
