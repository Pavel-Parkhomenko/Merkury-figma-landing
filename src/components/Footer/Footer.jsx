import React from "react";
import { FacebookFilled } from '@ant-design/icons';
import { Wrapper } from './styled';

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

const Footer = () => {
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
          <FacebookFilled />
        </a>
      </div>
    </Wrapper>
  );
};

export default Footer;
