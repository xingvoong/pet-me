import React, {useState} from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: 'space-between';
font-family: Arial, Helvetica, sans-serif;
`;

const App = (props) => {
  return (
    <Container>
      <div> column 1</div>
      <div> column 2</div>
      <div> column 3</div>
    </Container>
  )
}

export default App;