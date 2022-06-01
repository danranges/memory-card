import React, { useState } from 'react';
import Header from './components/Header';
import Gameboard from './components/Gameboard';
import Scoreboard from './components/Scoreboard';
import PaletteSelector from './components/PaletteSelector';
import './App.css';
import { Flex } from '@chakra-ui/react';

const App = () => {
  const [hasTheme, setHasTheme] = useState(false);
  const [palette, setPalette] = useState('');
  const handleClick = (color) => {
    setPalette(color);
    setHasTheme(true);
  };

  return (
    <div className='App'>
      <Header />
      <Scoreboard streak='3' score='3' />
      <Flex width={'100vw'} justify={'center'}>
        {hasTheme ? (
          <Gameboard palette={palette} />
        ) : (
          <PaletteSelector handleClick={handleClick} />
        )}
      </Flex>
    </div>
  );
};

export default App;
