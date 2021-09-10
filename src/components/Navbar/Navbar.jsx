import React from "react";
import { Link } from "react-router-dom";
import Blackcard from "../../assets/Blackcard.png"
function Navbar() {
  return (
    <div className="mt-5">
      <Link to="/">
        <img src={Blackcard} alt=""  width="300px"/>
        
      </Link>
    </div>
  );
}

export default Navbar;
