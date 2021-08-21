import React, { useState } from "react";
import { Link } from "react-router-dom";
import on1 from "../../assets/onboarding1.svg";
import on2 from "../../assets/onboarding2.svg";
import on3 from "../../assets/onboarding3.svg";

const Onboarding = () => {
  const [tab, setTab] = useState(1);
  return (
    <div className="onboarding">
      <Link to="/get-started" className="onboarding__skip">
        skip
      </Link>
      <div className="profile-start">
        {tab === 1 && (
          <div className="onboarding__page">
            <img src={on1} className="onboarding__image" />
            <div className="onboarding__text">
              <h2>
                Accomplish your <span>goals</span>
              </h2>
              <p>Accomplish your saving goals</p>
            </div>
          </div>
        )}
        {tab === 2 && (
          <div className="onboarding__page">
            <img src={on2} className="onboarding__image" />
            <div className="onboarding__text">
              <h2>
                Track your <span>savings</span>
              </h2>
              <p>Track your savings and build better spending habits</p>
            </div>
          </div>
        )}
        {tab === 3 && (
          <div className="onboarding__page">
            <img src={on3} className="onboarding__image" />
            <div className="onboarding__text">
              <h2>
                Redeem <span>rewards</span>
              </h2>
              <p>Redeem rewards when you accomplish your saving goals</p>
            </div>
          </div>
        )}
      </div>
      <div className="profile__navigation">
        <i
          className={`fas fa-circle profile__navigation-icon ${
            tab === 1 && "current"
          }`}
        ></i>
        <i
          className={`fas fa-circle profile__navigation-icon ${
            tab === 2 && "current"
          }`}
        ></i>
        <i
          className={`fas fa-circle profile__navigation-icon ${
            tab === 3 && "current"
          }`}
        ></i>
      </div>
      {(tab === 1 || tab === 2) && (
        <button onClick={() => setTab(tab + 1)} className="onboarding__button">
          Get Started
        </button>
      )}
      {tab === 3 && (
        <Link to="/get-started">
          <button className="onboarding__button">Get Started</button>
        </Link>
      )}
    </div>
  );
};

export default Onboarding;
