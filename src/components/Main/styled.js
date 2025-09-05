import styled from "styled-components";
import Secction3Bg from "../../img/Section3Bg.png";

export const Wrapper = styled.div`
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
`