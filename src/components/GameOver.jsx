import { Box, Button } from '@chakra-ui/react';
import React from 'react';

const GameOver = ({ hasWon, handleNewGame }) => {
  return (
    <Box>
      {hasWon ? 'You win' : 'You Lose'}
      <Button onClick={handleNewGame}> New Game</Button>
    </Box>
  );
};

export default GameOver;
