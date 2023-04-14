import styled from "styled-components";
import underButtons from "../../img/underButttons.png";

export const Wrapper = styled.div`
  width: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .block1 {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 10%;
    text-align: center;
    @media (max-width: 700px) {
      div {
        padding-top: 5%;
      }
      flex-direction: column;
      align-items: center;
    }
    div:nth-child(2) {
      div:before,
      div:after {
        content: "";
        display: inline-block;
        vertical-align: middle;
        width: 50%;
        @media (max-width: 700px) {
          width: 0;
        }
        margin-top: 10%;
        height: 1px;
        background-color: #dadee7;
        position: relative;
      }
      div:before {
        margin-left: -100%;
        left: -24px;
      }
      div:after {
        margin-right: -100%;
        right: -24px;
      }
    }
    div {
      img {
        width: 25%;
        height: 25%;
      }
      h1 {
        margin-top: 15%;
        font-size: 24px;
        margin-bottom: 5%;
        height: 20%;
      }
      p {
        font-size: 18px;
        padding: 0 10px;
        margin-bottom: 50px;
      }
      button {
        width: 75%;
        height: 50px;
        font-size: 1.2rem;
      }
    }
  }
  .underButtons {
    background: url(${underButtons}) no-repeat center center/cover;
    height: 100px;
  }
  .block2 {
    background-color: #f6f7fa;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media (max-width: 700px) {
      flex-direction: column;
    }
    .block2-1 {
      margin-left: 5%;
      width: 50%;
      @media (max-width: 700px) {
        width: 90%;
      }
      h1 {
        font-size: 60px;
      }
      p {
        font-size: 18px;
      }
    }
    div.check {
      color: #1890ff;
      display: flex;
      flex-direction: row;
      align-items: center;
      i {
        width: 30px;
        height: 30px;
      }
    }
    .block2-2 {
      width: 50%;
      @media (max-width: 700px) {
        width: 100%;
      }
      img {
        width: 100%;
      }
    }
  }
`;