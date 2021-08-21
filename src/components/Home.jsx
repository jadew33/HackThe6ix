import React from "react";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div>
      Home
      <div className="home__button-container">
        <NavLink to="/onboarding">
          <button>Register</button>
        </NavLink>
        <NavLink to="/login">
          <button>Log in</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
