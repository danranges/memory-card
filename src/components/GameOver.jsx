import { Flex, Button, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const GameOver = ({ hasWon, handleNewGame, palette }) => {
  return (
    <Flex flexDirection={'column'}>
      {hasWon ? (
        <Heading as='h2' size='xl'>
          Congratulations! You beat <Text borderRadius={'md'}>{palette}!</Text>
        </Heading>
      ) : (
        <h2>You Lose</h2>
      )}
      <Button onClick={handleNewGame} size={'lg'}>
        New Game
      </Button>
    </Flex>
  );
};

export default GameOver;
