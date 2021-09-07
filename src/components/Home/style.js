import styled from "styled-components";

export const OverallDiv = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  min-height: 100vh;
  /* background-color: blue; */

  .everybody {
    font-size: 170px;
    line-height: 170px;
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

  .inner-container {
    /* background-color: red; */
    margin-top: 40px;
    width: 90%;
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
    }
  }
`;

export const Content = styled.div``;
