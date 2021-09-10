import React from "react";
import { VendorsDiv } from "./styled";
import suit from '../../assets/suit.jpg';
import suits from '../../assets/suits.jpg';
import suitss from '../../assets/suitss.jpg';
import jim from '../../assets/jim.jpg';
import izigo from '../../assets/izigo.jpg';
import macbook from '../../assets/macbook.png';

import card from "../VendorsList/card.css"
// import jim from "../../../src/assets/"

function Vendors() {
  return (
    <VendorsDiv>
      <div className="inner-container row">
        <div className="card-deck">
          <div className="card">
            <img className="card-img-top" src={suit} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">JimsOutfit</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              {/* <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p> */}
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={suit} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Suits.</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              {/* <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p> */}
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={suits} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">YomiCasuals</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
              {/* <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p> */}
            </div>
          </div>
        </div>

        {/* second row */}
        {/* <div className="card-deck mt-5">
          <div className="card">
            <img className="card-img-top" src={suitss} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={macbook} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={jim} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </VendorsDiv>
  );
}

export default Vendors;
