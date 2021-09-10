import React from "react";
import { CardInfoDiv } from "./style";
import Iframe from "react-iframe";
import SignUp from "../SignUp/SignUp";
import { Link } from "react-router-dom";

function CardInfo() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <CardInfoDiv>
      <div className="inner-container row">
        <div className="left-side col-md-6 mt-5">
          <h1>
            WHAT'S IN <br />
            THE CARD?
          </h1>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            facilis accusamus dicta autem quaerat veritatis dignissimos cum,
            repellat ullam quos in ab error eos voluptatum expedita illo odit
            asperiores eum. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Aspernatur velit incidunt ipsa voluptatibus modi possimus
            quaerat inventore, eius tempora eos veritatis saepe provident enim
            fugiat veniam nisi voluptate asperiores qui. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Eum, magni rerum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae sed
            culpa, natus est, modi atque ut nisi quod corrupti quisquam eaque
            quos porro pariatur alias. Minima obcaecati nam et voluptate. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Sapiente error
            sint, iusto placeat corrupti atque cumque magni, saepe beatae,
            veritatis ratione suscipit. Voluptas repellat rerum, ab dolor eum
            modi minima. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Eveniet laboriosam, quasi nesciunt laborum esse veritatis
            deleniti harum placeat culpa fugiat?
          </p>
          <Link to="vendors">
            <button className="mt-3">VIEW VENDORS</button>
          </Link>
        </div>

        <div className="right-side col-md-6 mt-5">
          {/* <div className="card"> */}
            <Iframe
              url="http://www.youtube.com/embed/xDMP3i36naA"
              // width="60%"
              // height="35%"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"
              frameBorder="20px"
              scrolling="no"
              frameborder="0"
            />
          {/* </div> */}

          <button className="mt-5" onClick={() => setModalShow(true)}>
            SIGN UP NOW
          </button>

          <SignUp show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </div>
    </CardInfoDiv>
  );
}

export default CardInfo;
