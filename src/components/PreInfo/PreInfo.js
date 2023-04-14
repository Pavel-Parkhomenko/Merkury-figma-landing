import React from "react";
import Img1 from "../../img/Inteligentny obiekt wektorowy.png";
import Img2 from "../../img/Inteligentny obiekt wektorowy2.png";
import Img3 from "../../img/Inteligentny obiekt wektorowy3.png";
import Grupa2 from "../../img/Grupa 2.png";
import { Button } from "antd";
import { CheckCircleOutlined } from '@ant-design/icons';
import { Wrapper } from './styled'

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

const PreInfo = () => {
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
            <CheckCircleOutlined />
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>
          <div className="check">
            <CheckCircleOutlined />
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

export default PreInfo;
