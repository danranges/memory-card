import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Gameboard from './components/Gameboard';
import Scoreboard from './components/Scoreboard';
import PaletteSelector from './components/PaletteSelector';
import './App.css';
import { Flex } from '@chakra-ui/react';

const App = () => {
  const [hasTheme, setHasTheme] = useState(false);
  const [palette, setPalette] = useState('');
  const [isGameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const handlePaletteSelection = (color) => {
    setPalette(color);
    setHasTheme(true);
  };

  const handleScore = () => {
    setScore(score + 1);
  };

  useEffect(() => {
    score > streak && setStreak(score);
  }, [score, streak]);

  return (
    <div className='App'>
      <Header />
      <Scoreboard streak={streak} score={score} />
      <Flex width={'100vw'} justify={'center'}>
        {hasTheme ? (
          <Gameboard palette={palette} handleScore={handleScore} />
        ) : (
          <PaletteSelector handleClick={handlePaletteSelection} />
        )}
      </Flex>
    </div>
  );
};

export default App;
