import React from "react";
import styled from "styled-components";
import "./App.css";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";

const AppContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

function App() {
  return (
    <AppContainer>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </AppContainer>
  );
}

export default App;
