import styled from "styled-components";
import footer from "../../img/footer.png";

export const Wrapper = styled.div`
  width: 100%;
  background: url(${footer}) no-repeat center center/cover;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #8492af;
  @media (max-width: 700px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
  div.rights {
    width: 40%;
    padding-left: 3%;
    @media (max-width: 700px) {
      padding: 0%;
    }
  }
  div.links {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-end;
    @media (max-width: 700px) {
      align-items: center;
      justify-content: center;
      
    }
    a {
      color: #8492af;
      padding-right: 5%;
      @media (max-width: 700px) {
      padding: 1%;
    }
  }
`;