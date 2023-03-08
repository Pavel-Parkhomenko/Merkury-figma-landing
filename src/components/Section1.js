import React, { useEffect, useState } from "react";
import { Button, Icon } from "antd";
import Logo from "../img/Logo.png";
import HeaderBg from "../img/HeaderImg.png";
import DashBoard from "../img/Dashboard.png";
import styled from "styled-components";

const BgHeader = styled.div`
  background-color: white;
  width: 100%;
  background: url(${HeaderBg});
  background-position: center;
  background-size: cover;
  background-repeat: repeat;
  div.header-1 {
    padding-top: 10%;
    display: flex;
    flex-direction: row;
    background: none;
    justify-content: space-between;
    @media (max-width: 1000px) {
      flex-direction: column;
    }
    div.Logo {
      padding-left: 3%;
      @media (max-width: 1000px) {
        width: 100%;
        text-align: center;
      }
    }
    div.menu-icon {
      color: white;
      cursor: pointer;
      position: absolute;
      transform: rotate(-90deg);
      font-size: 18px;
      border: 2px solid white;
      border-bottom: none;
      border-top-left-radius: 15%;
      border-top-right-radius: 15%;
      right: -10px;
      top: 70px;
    }
    div.showMenu {
      display: flex;
      flex-direction: column;
      position: absolute;
      align-items: center;

      width: 80%;
      top: 0;
      left: 0;
      background: gray;
      opacity: 0.95;
      height: 100%;
      z-index: 3;
      button {
        margin-top: 2%;
      }
    }
    div.Menu {
      width: 100%;
      height: fit-content;
      text-align: right;
      padding-right: 5%;
      @media (max-width: 1000px) {
        padding: 5% 0;
        text-align: center;
      }
    }
  }
  div.header-2 {
    .title {
      color: white;
      font-size: 60px;
      text-align: center;
      margin-top: 10%;
    }
    .underTitle {
      color: #495672;
      font-size: 36px;
      text-align: center;
    }
    .getStarted {
      text-align: center;
      margin-top: 70px;
      button {
        width: 205px;
        height: 50px;
      }
    }
    div.dashboard {
      display: flex;
      flex-direction: row;
      justify-content: center;

      width: 100%;
      text-align: center;
      z-index: 1;

      img {
        max-width: 80%;
        transform: translateY(5%);
        box-shadow: -5px 0 5px rgba(0, 0, 0, 0.3);
      }
    }
  }
`;

const NavButton = styled(Button)`
  height: 50px;
  width: 130px;
  font-size: 18px;
  color: white;
  background: none !important;
`;

const Section1 = () => {
  const [buttons, setButtons] = useState([
    { key: Math.random(), name: "Features", active: false },
    { key: Math.random(), name: "Pricing", active: false },
    { key: Math.random(), name: "Blog", active: false },
    { key: Math.random(), name: "Contact", active: false },
    { key: Math.random(), name: "Login", active: true }
  ]);
  const [menu, setMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    let timer = setInterval(() => setWidth(window.innerWidth), 50);
    if (width < 1000) {
      setMenu(true);
    } else {
      setMenu(false);
      setShowMenu(false);
    }
    return () => clearInterval(timer);
  }, [width]);

  const showButtons = buttons.map(({ key, name, active }) => {
    return (
      <NavButton
        key={key}
        shape="round"
        type={active ? "" : "link"}
        onMouseOver={e =>
          setButtons(prev =>
            prev.map(but =>
              but.key === key
                ? { ...but, active: true }
                : { ...but, active: false }
            )
          )
        }
        onMouseOut={e =>
          setButtons(prev => prev.map(but => ({ ...but, active: false })))
        }
      >
        {name}
      </NavButton>
    );
  });

  return (
    <BgHeader>
      <div className="header-1">
        <div className="Logo">
          <img src={Logo} alt="" />
        </div>
        {menu ? (
          <>
            <div className="menu-icon" onClick={() => setShowMenu(!showMenu)}>
              Menu
            </div>
            {showMenu && <div className="showMenu">{showButtons}</div>}
          </>
        ) : (
          <div className="Menu">{showButtons}</div>
        )}
      </div>
      <div className="header-2">
        <div className="title">Grow Your Business With Merkury</div>
        <div className="underTitle">Your Partner in-crime</div>
        <div className="getStarted">
          <Button shape="round" type="primary">
            Get Started
          </Button>
        </div>
        <div className="dashboard">
          <img src={DashBoard} alt="" />
        </div>
      </div>
    </BgHeader>
  );
};

export default Section1;
