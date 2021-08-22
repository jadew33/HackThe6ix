import React, {useState} from "react";
import { Link } from "react-router-dom";
import eye from "../../assets/eye.svg";
import google from "../../assets/google.svg";

const Login = () => {

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });
  
  const handleChange = (event) => {

    setData({...data, [event.target.name]: event.target.value});
    console.log(data);
  }

  const handleSubmit = () => {
    
    
  }

  return (
    <div className="get-started">
      <Link to="/">
        <i class="fas fa-chevron-left chevron-icon"></i>
      </Link>
      <h1>Login</h1>
      <p className="account-details">Account Details</p>
      <input name = "email" type="email" placeholder="Email Address" onChange = {handleChange}/>
      <input name = "password" type="password" placeholder="Password" onChange = {handleChange}/>
      <img src={eye} className="eye" />
      <Link to="/budget">
        <button onClick = {handleSubmit} className="continue">Continue</button>
      </Link>
      <p className="fine-text">
        Don't have an account? <span>Sign-Up</span>
      </p>
      <p className="or fine-text"> or </p>
      <button className="google">
        <img src={google} />
        Continue with Google
      </button>
    </div>
  );
};
export default Login;
