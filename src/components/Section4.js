import React from "react";
import styled from "styled-components";
import Easy from "../img/Easy to customize.png";

import { Button, Icon, List } from "antd";

const content = [
  {
    plan: "BRONZE PLAN",
    price: "19",
    array: [true, true, false, false]
  },
  {
    plan: "SILVER PLAN",
    price: "49",
    array: [true, true, true, false]
  },
  {
    plan: "GOLD PLAN",
    price: "99",
    array: [true, true, true, true]
  }
];

const Wrapper = styled.div`
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

const Section4 = () => {
  return (
    <Wrapper>
      <div className="header">
        <h1>Powerfull PSD Template</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
      </div>
      <div className="easy">
        <img src={Easy} alt="" />
      </div>
      <div className="description">
        <h1>Check our pricing!</h1>
        <div className="plans">
          {content.map(({ price, array, plan }) => {
            return (
              <div className="group" key={plan}>
                <h1>{plan}</h1>
                <div>
                  <span>$</span>
                  <span>{price}</span>
                  <span>{"/mon"}</span>
                </div>
                <List
                  itemLayout="horizontal"
                  dataSource={array}
                  renderItem={bool => (
                    <List.Item style={{ border: "none", padding: "2px" }}>
                      {bool ? (
                        <Icon
                          type="check-circle"
                          style={{ paddingRight: "3px", color: "#1890ff" }}
                        />
                      ) : (
                        <Icon
                          type="close-circle"
                          style={{ paddingRight: "3px", color: "red" }}
                        />
                      )}
                      <List.Item.Meta
                        description={"Lorem ipsum dolor sit am"}
                      />
                    </List.Item>
                  )}
                />
              </div>
            );
          })}
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <div className="btn">
          <Button type="primary" shape="round">
            Join now!
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Section4;
