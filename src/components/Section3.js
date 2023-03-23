import React from "react";
import styled from "styled-components";
import Secction3Bg from "../img/Section3Bg.png";
import DnD from "../img/DnD.png";

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: url(${Secction3Bg}) no-repeat center center/cover;
  margin: 0 auto;
  @media (max-width: 700px) {
    flex-direction: column-reverse;
  }
  img {
    width: fit-content;
    max-width: 70%;
    @media (max-width: 700px) {
      width: 90%;
    }
  }
  .description {
    text-align: center;
    width: 30%;
    @media (max-width: 700px) {
      width: 90%;
    }
    h1 {
      font-size: 60px;
      color: white;
    }
    p {
      font-size: 18px;
      color: #8492af;
    }
  }
`;

const Section3 = () => {
  return (
    <Wrapper>
      <img src={DnD} alt="" />
      <div className="description">
        <h1>Drag & Drop</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <br />
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.{" "}
        </p>
      </div>
    </Wrapper>
  );
};

export default Section3;
