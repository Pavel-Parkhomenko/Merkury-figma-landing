import React from "react";
import styled from "styled-components";
import "./App.css";
import Section1 from "./components/Section1";

const AppContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

function App() {
  return (
    <AppContainer>
      <Section1 />
    </AppContainer>
  );
}

export default App;
