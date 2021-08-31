import styled from 'styled-components';
import home from '../../img/home.jpg';

const Wrap = styled.div`
display: flex;
flex-direction: column;
background-image: url(${home});
align-items: center;
justify-content: center;
left: 50%;
width: 100%;
height: 100vh;
`;

const Icon = styled.div`
font-size: 150px;
background: transparent;
outline: none;
z-index: 3;
&:hover {
  background: transparent;
  font-size: 200px;
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
      transform: translate3d(-17px, 0, 0);
      outline: none;
    }

    20%, 80% {
      transform: translate3d(17px, 0, 0);
      outline: none;
    }

    30%, 50%, 70% {
      transform: translate3d(-17px, 0, 0);
      outline: none;
    }

    40%, 60% {
      transform: translate3d(17px, 0, 0);
      outline: none;
    }
  }
}
`;

const Button = styled.button`
font-size: 35px;
`;

export {Wrap, Icon, Button};