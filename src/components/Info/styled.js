import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #f6f7fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div.header {
    background-color: #f6f7fa;
    h1 {
      text-align: center;

      font-size: 60px;
    }
    p {
      text-align: center;
      margin: 0 auto;
      font-size: 18px;
      max-width: 70%;
    }
  }
  div.easy {
    background-color: #f6f7fa;
    margin: 10% auto 0 auto;
    width: 80%;
    img {
      width: 100%;
    }
  }
  div.description {
    div.plans {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      @media (max-width: 650px) {
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
      }
      div.group {
        margin: 0 0;
        text-align: center;
        background: white;
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
        padding: 2%;
        @media (max-width: 650px) {
          width: 50%;
          margin-bottom: 2%;
        }
        div {
          width: fit-content;
          margin: 0 auto;
          span:nth-child(2) {
            font-size: 40px;
            font-weight: bold;
          }
          span:nth-child(1) {
            font-size: 18px;
            font-weight: bold;
          }
        }
      }
    }
    h1 {
      text-align: center;
      padding: 5% 0;
    }
    p {
      margin: 3% auto;
      width: 100%;
      text-align: center;
    }
    div.btn {
      text-align: center;
      margin: 0 auto;
      padding-bottom: 5%;
    }
    div.btn:before,
    div.btn:after {
      content: "";
      display: inline-block;
      vertical-align: middle;
      width: 25%;
      height: 1px;
      background-color: #dadee7;
      position: relative;
    }
    div.btn:before {
      margin-left: -100%;
      left: -24px;
    }
    div.btn:after {
      margin-right: -100%;
      right: -24px;
    }
  }
`;