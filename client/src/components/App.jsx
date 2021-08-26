import React, {useState} from 'react';
import styled from 'styled-components';
import PetView from './PetView.jsx';
import WalkPet from './WalkPet.jsx';

const Container = styled.div`
display: flex;
flex-direction: row;
justify-content:center;
align-items: center;
font-family: Arial, Helvetica, sans-serif;
`;

const App = (props) => {
  const [walk, setWalk] = useState(false);

  return (
    <Container>
      {
        walk ? <WalkPet /> : <PetView setWalk={setWalk} walk={walk}/>
      }
    </Container>
  );
};
export default App;