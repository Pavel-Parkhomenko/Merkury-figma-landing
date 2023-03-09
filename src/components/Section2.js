import React from "react";
import styled from "styled-components";
import Img1 from "../img/Inteligentny obiekt wektorowy.png";
import Img2 from "../img/Inteligentny obiekt wektorowy2.png";
import Img3 from "../img/Inteligentny obiekt wektorowy3.png";
import underButtons from "../img/underButttons.png";
import Grupa2 from "../img/Grupa 2.png";
import { Button, Icon } from "antd";

const content = [
  {
    src: Img3,
    h1: "Manage Your Workflow",
    p:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    src: Img2,
    h1: "Analytics & Insights",
    p:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    src: Img1,
    h1: "Organize Your Deadlines",
    p:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];

const Wrapper = styled.div`
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

const Section2 = () => {
  return (
    <Wrapper>
      <div className="block1">
        {content.map(({ src, h1, p }) => {
          return (
            <div key={h1}>
              <div>
                <img src={src} alt={h1} />
              </div>

              <h1>{h1}</h1>
              <p>{p}</p>
              <Button shape="round">See more</Button>
            </div>
          );
        })}
      </div>
      <div className="underButtons" />
      <div className="block2">
        <div className="block2-1">
          <h1>All You need is a browser!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="check">
            <Icon type="check-circle" />{" "}
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>
          <div className="check">
            <Icon type="check-circle" />{" "}
            <p>Ut enim ad minim veniam quis nostrud</p>
          </div>
        </div>
        <div className="block2-2">
          <img src={Grupa2} alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Section2;
