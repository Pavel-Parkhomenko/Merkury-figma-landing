import React from "react"
import Easy from "../../img/Easy to customize.png"
import { Wrapper } from './styled'
import { Button, List } from "antd"
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'

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

const Info = () => {
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
                        <CheckCircleOutlined
                          style={{ paddingRight: "3px", color: "#1890ff" }}
                        />
                      ) : (
                        <CloseCircleOutlined style={{ paddingRight: "3px", color: "red" }}/>
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
  )
}

export default Info
