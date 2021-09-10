import styled from "styled-components";

export const CardInfoDiv = styled.div`
  display: flex;
  justify-content: center;
  min-height: 95vh;
  text-align: start;

  .inner-container {
    display: flex;
    width: 95%;
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
      border-radius: 7px;
      border: solid 2px gray;
      background-color: black;
    }
    button {
      background-color: black;
      color: rgb(159, 151, 151);
      cursor: pointer;
    }
  }
`;
