import styled from "styled-components";

export const OverallDiv = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  min-height: 100vh;
  overflow-x: hidden;
  /* background-color: blue; */

  .everybody {
    /* margin: 0; */
    font-size: 140px;
    line-height: 140px;
    font-weight: bold;
  }
  @media (max-width: 769px) {
    .everybody {
      font-size: 100px;
      line-height: 90px;
      font-weight: bold;
    }
  }
  @media (max-width: 411px) {
    .everybody {
      font-size: 70px;
      line-height: 70px;
      font-weight: bold;
    }
  }

  @media (max-width: 540px) {
    .everybody {
      font-size: 90px;
      line-height: 80px;
      font-weight: bold;
    }
  }
  @media (max-width: 410px) {
    .everybody {
      font-size: 50px;
      line-height: 55px;
      font-weight: bold;
    }
  }


  .enjoy {
    font-size: 25px;
    line-height: 25px;
    font-weight: normal;
  }
  @media (max-width: 769px) {
    .enjoy {
      font-size: 20px;
      line-height: 20px;
      font-weight: normal;
    }
  }
  @media (max-width: 411px) {
    .enjoy {
      font-size: 18px;
      line-height: 18px;
      font-weight: normal;
    }
  }

  @media (max-width: 540px) {
    .enjoy {
      font-size: 18px;
      line-height: 28px;
      font-weight: normal;
    }
  }
  @media (max-width: 410px) {
    .enjoy {
      font-size: 17px;
      line-height: 25px;
      font-weight: normal;
    }
  }


  .inner-container {
    /* background-color: red; */
    /* margin-top: 40px; */
    padding-bottom: 80px;
    width: 90%;
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 720px) {
    .inner-container {
      display: flex;
      flex-direction: column;
      align-content: center;
      width: 95%;
    }
  }

  .button-div {
    button {
      background: black;
      color: rgb(159, 151, 151);
      cursor: pointer;
      /* width: 400px; */
      margin: 10px;
      /* margin-top: 0; */
    }
  }
`;

export const Content = styled.div``;
