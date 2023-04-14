import styled from "styled-components";
import HeaderBg from "../../img/HeaderImg.png";
import { Button } from "antd";

export const BgHeader = styled.div`
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

export const NavButton = styled(Button)`
  height: 50px;
  width: 130px;
  font-size: 18px;
  color: white;
  background: none !important;
`;