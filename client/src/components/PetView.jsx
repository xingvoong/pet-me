import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import WalkPet from './WalkPet.jsx';


const PetView = ({walk, setWalk}) => {
  const [count, setCount] = useState(0);
  const happiness = count;
  if (count < 100) {
    return (
      <Wrap>
        pet me 100 times!
        <div>
          Happiness: {count} %
        </div>

        <Icon onClick={() => setCount(count + 1)}>
          🐶
        </Icon>
      </Wrap>
    );

  } else if (count >= 100 && count < 200) {
    console.log(count);
    return (
      <Wrap>
        pet me 100 more times, pls!
        <div>
          Happiness: {happiness} %
        </div>

        <Icon onClick={() => setCount(count + 1)}>
          🐶
        </Icon>

      </Wrap>
    );
  } else if (count >= 200) {
    return (
      <div>
        <Wrap>
          <Icon>
          🐕
          </Icon>
          <Button onClick={() => setWalk(!walk)}> now, walk me pls, woof woof </Button>
        </Wrap>

      </div>
    );
  }
};

const Wrap = styled.div`
display: flex;
flex-direction: column;
background-color: #CEE5D0;
font-size: 100px;
align-items: center;
justify-content: center;
left: 50%;
width: 100%;
height: 100vh;
`;

const Icon = styled.div`
font-size: 200px;
background: transparent;
outline: none;
&:hover {
  background: transparent;
  font-size: 300px;
  cursor: pointer;
}
&::selection {
   background: transparent;
}
&:active {
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;

  @keyframes shake {
    10%, 90% {
      transform: translate3d(-20px, 0, 0);
      outline: none;
    }

    20%, 80% {
      transform: translate3d(20px, 0, 0);
      outline: none;
    }

    30%, 50%, 70% {
      transform: translate3d(-20px, 0, 0);
      outline: none;
    }

    40%, 60% {
      transform: translate3d(20px, 0, 0);
      outline: none;
    }
  }
}
`;

const Button = styled.button`
font-size: 35px;
`;


export default PetView;