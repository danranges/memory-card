import { Flex, Button, Heading, Box } from '@chakra-ui/react';
import React from 'react';

const GameOver = ({ hasWon, handleNewGame, palette }) => {
  return (
    <Flex flexDirection={'column'}>
      {hasWon ? (
        <Box m={'5'}>
          <Heading as='h2' size='xl'>
            Congratulations!
          </Heading>
          <Heading as='h2' size={'xl'} color={`${palette}.500`}>
            You beat <span>{palette}!</span>
          </Heading>
        </Box>
      ) : (
        <Box m={'5'}>
          <Heading as='h2' size='xl'>
            Nice try!
          </Heading>
          <Heading as='h2' size={'xl'}>
            Better luck next time!
          </Heading>
        </Box>
      )}
      <Button onClick={handleNewGame} size={'lg'}>
        {hasWon ? 'New Game' : 'Try Again'}
      </Button>
    </Flex>
  );
};

export default GameOver;
