import React, { useState } from 'react';
import { Button, Grid, GridItem } from '@chakra-ui/react';

const Gameboard = ({ palette, handleScore, handleGameOver }) => {
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
  };

  const hues = [100, 200, 300, 400, 500, 600, 700, 800, 900];
  const shuffleHues = (unshuffled) => {
    let shuffled = unshuffled
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    return shuffled;
  };
  return (
    <Grid
      m={2}
      h='400px'
      w='400px'
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
            ></Button>{' '}
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default Gameboard;
