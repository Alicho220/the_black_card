import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="mt-5">
      <Link to="/">
        <h2 className="mt-3">BLACK CARD</h2>
      </Link>
    </div>
  );
}

export default Navbar;
