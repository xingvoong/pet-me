import React, {useState} from 'react';
import styled from 'styled-components';
import Draggable, {DraggableCore} from 'react-draggable';


const WalkPet = () => {
  return (
    <Wrap>
      <Draggable>
        <div> 🐕 </div>
      </Draggable>
    </Wrap>

  );
};

const Wrap = styled.div`
display: flex;
flex-direction: column;
background-color: #D1EAC5;
font-size: 100px;
align-items: center;
justify-content: center;
left: 50%;
width: 100%;
height: 100vh;
`;




export default WalkPet;