import React, { useState } from "react";
import Home from "../../assets/Home.svg";
import HomeSelected from "../../assets/home-selected.svg";
import Goals from "../../assets/goals.svg";
import GoalsSelected from "../../assets/goals-selected.svg";
import Budget from "../../assets/budget.svg";
import BudgetSelected from "../../assets/budget-selected.svg";
import Account from "../../assets/account.svg";
import AccountSelected from "../../assets/account-selected.svg";

import { Link } from "react-router-dom";

const Footer = () => {
  const [home, toggleHome] = useState(true);
  const [budget, toggleBudget] = useState(false);
  const [goals, toggleGoals] = useState(false);
  const [account, toggleAccount] = useState(false);

  return (
    <div className="footer">
      <Link to="/dashboard">
        <img src={home ? HomeSelected : Home} className="footer__home" />
      </Link>
      <Link
        to="/budget"
        onClick={() => {
          toggleBudget(true);
          toggleHome(false);
        }}
      >
        <img
          src={budget ? BudgetSelected : Budget}
          className="footer__budget"
          onClick={() => {
            toggleBudget(true);
            toggleHome(false);
          }}
        />
      </Link>
      <Link to="/goals" onClick={toggleGoals}>
        <img src={goals ? GoalsSelected : Goals} className="footer__goals" />
      </Link>
      <Link to="/account" onClick={toggleAccount}>
        <img
          src={account ? AccountSelected : Account}
          className="footer__account"
        />
      </Link>
    </div>
  );
};

export default Footer;
