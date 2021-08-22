import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Footer";
import budget from "../../assets/Budget.png";

const Budget = () => {
  const [userData, setUserData] = useState();
  //     axios.get("localhost:5001/users/6VZPFS81GoGjD7YGFN88").then(response => {
  //         console.log(response);
  //       })
  //   );
  // useEffect(async () => {
  //   const res = await axios("localhost:5001/api/users/6VZPFS81GoGjD7YGFN88");
  //   setUserData(res.data);
  //   console.log(res.data);
  // });

  return (
    <div>
      <div className="budget">
        <img src={budget} style={{ overflow: "scroll", width: "320px" }} />
      </div>
      <Footer />
    </div>
  );
};

export default Budget;
