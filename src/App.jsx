import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Gameboard from './components/Gameboard';
import Scoreboard from './components/Scoreboard';
import PaletteSelector from './components/PaletteSelector';
import GameOver from './components/GameOver';
import './App.css';
import { Flex } from '@chakra-ui/react';

const App = () => {
  const [hasTheme, setHasTheme] = useState(false);
  const [palette, setPalette] = useState(null);
  const [isGameOver, setGameOver] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);

  const handlePaletteSelection = (color) => {
    setPalette(color);
    setHasTheme(true);
  };

  const handleScore = () => {
    setScore(score + 1);
  };

  const handleGameOver = (hasWon) => {
    hasWon && setHasWon(true);
    setGameOver(true);
  };

  const handleNewGame = () => {
    setScore(0);
    setPalette(null);
    setHasWon(false);
    setGameOver(false);
    setHasTheme(false);
  };
  useEffect(() => {
    score > streak && setStreak(score);
    score === 9 && handleGameOver(true);
  }, [score, streak]);

  return (
    <div className='App'>
      <Header />
      <Scoreboard streak={streak} score={score} />
      <Flex width={'100vw'} justify={'center'}>
        {!hasTheme && !isGameOver && (
          <PaletteSelector handleClick={handlePaletteSelection} />
        )}
        {hasTheme && !isGameOver && (
          <Gameboard
            palette={palette}
            handleScore={handleScore}
            handleGameOver={handleGameOver}
          />
        )}
        {isGameOver && (
          <GameOver hasWon={hasWon} handleNewGame={handleNewGame} />
        )}
      </Flex>
    </div>
  );
};

export default App;
