import React, { useState, useEffect } from "react";
import axios from "axios";

const Budget = () => {
  const [userData, setUserData] = useState();
  //     axios.get("localhost:5001/users/6VZPFS81GoGjD7YGFN88").then(response => {
  //         console.log(response);
  //       })
  //   );

  useEffect(async () => {
    const res = await axios("localhost:5001/api/users/6VZPFS81GoGjD7YGFN88");
    setUserData(res.data);
    console.log(res.data);
  });

  return (
    <div>
<h1>Budget</h1>
<div>
<p>Your Current Goal</p>
</div>
      <pre>{JSON.stringify(userData)}</pre>
    </div>
  );
};

export default Budget;
