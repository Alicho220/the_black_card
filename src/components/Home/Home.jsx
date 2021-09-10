import React from "react";
import { OverallDiv, Content } from "./style";
import { Link } from "react-router-dom";

function Home() {
  return (
    <OverallDiv>
      <div className="inner-container">
        <h1 className="everybody mt-3">
          EVERYDAY IS <br />
          BLACK FRIDAY
        </h1>
        <h2 className="mt-3 enjoy">
          ENJOY UP TO 30% DISCOUNT AT YOUR FAVOURITE STORES
        </h2>
        <h2 className="enjoy">WHEN YOU SHOP WITH THE BLACK CARD</h2>

        <div className="button-div mt-5">
          <Link to="/about">
            <button className="btn btn-secondary">FIND OUT MORE</button>
          </Link>
          <Link to="/about">
            <button className="btn btn-secondary">SIGN UP NOW</button>
          </Link>
        </div>
      </div>
    </OverallDiv>
  );
}

export default Home;
