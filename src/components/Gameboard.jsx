import React, { useState } from 'react';
import { Button, Flex, Grid, GridItem, Heading } from '@chakra-ui/react';

const Gameboard = ({ palette, handleScore, handleGameOver }) => {
  const [turn, setTurn] = useState(0);
  const [wasHueChosen, setHueChosen] = useState({
    100: false,
    200: false,
    300: false,
    400: false,
    500: false,
    600: false,
    700: false,
    800: false,
    900: false,
  });

  const handleClick = (hue) => {
    if (wasHueChosen[hue]) {
      handleGameOver();
      return;
    }
    setHueChosen((wasHueChosen) => ({
      ...wasHueChosen,
      [hue]: true,
    }));
    handleScore();
    setTurn(turn + 1);
  };

  const hues = [100, 200, 300, 400, 500, 600, 700, 800, 900];
  const shuffleHues = (unshuffled) => {
    let shuffled = unshuffled
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    return shuffled;
  };

  const instructions = {
    0: 'Choose a color',
    1: 'Now pick a different one',
    2: 'One more, try not to repeat',
    8: 'Almost there!',
  };

  return (
    <Flex flexDirection={'column'}>
      <Heading as='h2' padding={4} size={'lg'}>
        {instructions[turn] ?? 'Keep going...'}
      </Heading>
      <Grid
        m={2}
        h='500px'
        w='500px'
        maxW={'90vw'}
        maxH={'90vw'}
        templateRows='repeat(3, 1fr)'
        templateColumns='repeat(3, 1fr)'
        gap={1}
      >
        {shuffleHues(hues).map((hue) => {
          return (
            <GridItem key={hue}>
              <Button
                bg={`${palette}.${hue}`}
                onClick={() => handleClick(hue)}
                h={'100%'}
                w={'100%'}
                _hover={{ border: '2px white' }}
              ></Button>{' '}
            </GridItem>
          );
        })}
      </Grid>
    </Flex>
  );
};

export default Gameboard;
