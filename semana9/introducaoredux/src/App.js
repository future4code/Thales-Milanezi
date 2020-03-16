import React from 'react';
import styled from 'styled-components'
import Inputs from './Components/Inputs/Inputs';
import Tasks from './Components/Tasks/Tasks';
import BottomBar from './Components/BottomBar/BottomBar';

const DivWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
const MainTitle = styled.div`
font-size: 50px;
color: red;
`


function App() {
  return (
    <DivWrapper >
      <MainTitle>4TASK</MainTitle>
      <Inputs />
      <Tasks />
      <BottomBar/>
    </DivWrapper>
  );
}

export default App;
