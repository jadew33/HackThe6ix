import React from "react";

const AgeSelection = () => {
  return (
    <div className="age age__container">
      <h3>Enter your age</h3>
      <p className="profile__description">
        We use this to tailor our app and find personal offers for you
      </p>
      <input type="date" id="age" name="age" placeholder="YYYY/MM/DD" />
    </div>
  );
};

export default AgeSelection;
