import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <i class="fas fa-home fa-2x footer__icon"></i>
      <Link to="/budget">
        <i class="fas fa-coins fa-2x footer__icon"></i>
      </Link>
      <i class="fas fa-bullseye fa-2x footer__icon"></i>
      <i class="fas fa-award fa-2x footer__icon"></i>
      <i class="fas fa-user fa-2x footer__icon"></i>
    </div>
  );
};

export default Footer;
