import React from "react";
import { Wrapper } from './styled';
import DnD from "../../img/DnD.png";

const Main = () => {
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

export default Main;
