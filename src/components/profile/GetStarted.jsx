import React from "react";
import { Link } from "react-router-dom";
import eye from "../../assets/eye.svg";
import google from "../../assets/google.svg";

const GetStarted = () => {
  return (
    <div className="get-started">
      <Link to="/">
        <i class="fas fa-chevron-left chevron-icon"></i>
      </Link>
      <h1>Get Started</h1>
      <p className="account-details">Account Details</p>
      <input type="text" placeholder="Full name" />
      <input type="email" placeholder="Email Address" />
      <input type="password" placeholder="Password" />
      <img src={eye} className="eye" />
      <p className="fine-text">
        By continuing, you agree to our{" "}
        <span>Terms and Conditions and Privacy Policy</span>
      </p>
      <Link to="/register">
        <button className="continue">Continue</button>
      </Link>
      <p className="fine-text">
        Don't have an account? <span>Log in</span>
      </p>
      <p className="or fine-text"> or </p>
      <button className="google">
        <img src={google} />
        Continue with Google
      </button>
    </div>
  );
};
export default GetStarted;
