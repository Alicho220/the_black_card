import React from "react";
import { OverallDiv, Content } from "./style";

function Home() {
  return (
    <OverallDiv>
      <div className="inner-container" >
          <h1 className="everybody mt-5">EVERYDAY IS <br />
          BLACK FRIDAY</h1>
          <h2 className="mt-3">
              ENJOY UP TO 30% DISCOUNT AT YOUR FAVOURITE STORES 
          </h2>
          <h2>
          WHEN YOU SHOP WITH THE BLACK CARD
          </h2>

          <div className="button-div mt-5">
              <button>FIND OUT MORE</button>
              <button>SIGN UP NOW</button>
          </div>
       
      </div>
    </OverallDiv>
  );
}

export default Home;
