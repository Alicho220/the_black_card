import styled from "styled-components";

export const CardInfoDiv = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  text-align: start;
  /* overflow-y: visible; */
  overflow-x: hidden;

  .inner-container {
    display: flex;
    width: 95%;
    padding-bottom: 40px;
  }

  .left-side {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 100px;

    h1 {
      font-size: 70px;
      line-height: 80px;
    }
    button {
      background-color: black;
      color: rgb(159, 151, 151);
      cursor: pointer;
    }
  }

  .right-side {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .myClassname {
      border-radius: 17px;
      border: solid 2px;
      background-color: black;
    }
    button {
      background-color: black;
      color: rgb(159, 151, 151);
      cursor: pointer;
    }

  }
`;
