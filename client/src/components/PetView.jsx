import React, {useState} from 'react';
import styled from 'styled-components';
import WalkPet from './WalkPet.jsx';


const PetView = ({walk, setWalk}) => {
  const [count, setCount] = useState(0);
  if (count === 10) {
    return (
      <Wrap>
        I'm happy, thanks daddi! woof woof
        <Icon>
          🐕
        </Icon>
        <Button onClick={() => setWalk(!walk)}> now, I want to go on a walk, woof woof, walk me </Button>
      </Wrap>
    );
  } else {
    return (
      <Wrap>
        pet me 10 times!
        <div>
          pet count: {count}
        </div>
        <Icon onClick={() => setCount(count + 1)}>
          🐕
        </Icon>
      </Wrap>
    );
  }
};

const Wrap = styled.div`
display: flex;
flex-direction: column;
background-color: #00bfff;
font-size: 100px;
align-items: center;
justify-content: center;
left: 50%;
width: 50%;
height: 100vh;
`;

const Icon = styled.div`
font-size: 200px;
background: transparent;
&:hover {
  font-size: 300px;
  cursor: pointer;
}
&:active {
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;

  @keyframes shake {
    10%, 90% {
      transform: translate3d(-4px, 0, 0);
    }

    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }

    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%, 60% {
      transform: translate3d(4px, 0, 0);
    }
  }
}
`;

const Button = styled.button`
font-size: 35px;
`;


export default PetView;