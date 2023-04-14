import React, { useEffect, useState } from "react";
import { Button } from "antd";
import Logo from "../../img/Logo.png";
import DashBoard from "../../img/Dashboard.png";
import { BgHeader, NavButton } from './styled';

const Header = () => {
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

export default Header;
