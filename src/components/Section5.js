import React from "react";
import styled from "styled-components";
import footer from "../img/footer.png";

import { Icon } from "antd";

const content = [
  {
    a: "Pricing"
  },
  {
    a: "Blog"
  },
  {
    a: "Contact"
  }
];

const Wrapper = styled.div`
  width: 100vh;
  background: url(${footer}) no-repeat center center/cover;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #8492af;
  @media (max-width: 700px) {
    flex-direction: column-reverse;
    justify-content: center;
    height: 30px
  }
  div.rights {
    width: 45%;
    padding-left: 3%;
    padding-right: 3%;
    margin: 0;
    @media (max-width: 700px) {
      padding: 0%;
      margin: 0;
    }
  }
  div.links {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    @media (max-width: 700px) {
      align-items: center;
      justify-content: center;
      padding: 10px;
    }
    a {
      color: #6g72af;
      padding-right: 5%;
      @media (max-width: 700px) {
      padding: 1%;
    }
  }
`;

const Section5 = () => {
  return (
    <Wrapper>
      <div className="rights">&#169;2020 Automedon all right reserved</div>
      <div className="links">
        {content.map(({ a }) => {
          return (
            <a href="@" key={a}>
              {a}
            </a>
          );
        })}
        <a href="@">
          <Icon type="facebook" />
        </a>
      </div>
    </Wrapper>
  );
};

export default Section5;
