import React, {useState} from 'react';
import styled from 'styled-components';
import Draggable, {DraggableCore} from 'react-draggable';
import background from '../img/park.jpg';



const WalkPet = () => {
  return (
    <Wrap>
      <Draggable>
        <div> <Icon> 🐕 </Icon> </div>
      </Draggable>
    </Wrap>

  );
};

const Wrap = styled.div`
display: flex;
flex-direction: column;
background-image: url(${background});
align-items: center;
justify-content: center;
left: 50%;
width: 100%;
height: 100vh;
`;

const Icon = styled.div`
font-size: 120px;
`;




export default WalkPet;