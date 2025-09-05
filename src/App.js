import React from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import PreInfo from "./components/PreInfo/PreInfo";
import Main from "./components/Main/Main";
import Info from "./components/Info/Info";
import Footer from "./components/Footer/Footer";
import 'antd/dist/reset.css';

const AppContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <PreInfo />
      <Main />
      <Info />
      <Footer />
    </AppContainer>
  );
}

export default App;
