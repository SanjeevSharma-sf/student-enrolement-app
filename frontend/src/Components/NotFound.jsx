import React from "react";
import notfound from "../Assets/Images/notfound.png";
const NotFound = () => {
  return (
    <img
      src={notfound}
      alt="not found"
      style={{ width: "30%", margin: "80px 0 0 35%" }}
    />
  );
};

export default NotFound;
