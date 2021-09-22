import React, {useState} from 'react';
import {Wrap, Icon, Button} from './styles/PetViewStyle.jsx';
import './styles/PetView.css';


// eslint-disable-next-line react/prop-types
const PetView = ({walk, setWalk}) => {
  const [count, setCount] = useState(0);
  if (count < 100) {
    return (
      <Wrap>
        <div>
          <div className="cartoon">
            <div className="bubble b r hb">daddie, pet mii, plz</div>
          </div>
          <div>
            Happiness: {count} %
          </div>
        </div>
        <Icon onClick={() => setCount(count + 1)}>
          🐕
        </Icon>
      </Wrap>
    );

  } else if (count >= 100 && count < 150) {
    console.log(count);
    return (
      <Wrap>
        <div>
          <div className="cartoon">
            <div className="bubble b r hb">more pets please</div>
          </div>
          <div>
            Happiness: {count} %
          </div>
        </div>

        <Icon onClick={() => setCount(count + 1)}>
          🐕
        </Icon>

      </Wrap>
    );
  } else if (count >= 150) {
    return (
      <Wrap>
        <Button onClick={() => setWalk(!walk)}>
          <div className="cartoon">
            <div className="bubble b r hb">now, walk mii please</div>
          </div>
        </Button>
        <Icon>
        🐕
        </Icon>

      </Wrap>
    );
  }
};

export default PetView;
