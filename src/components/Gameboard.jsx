import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

const Gameboard = () => {
  return (
    <Grid
      m={2}
      h='400px'
      w='400px'
      templateRows='repeat(3, 1fr)'
      templateColumns='repeat(3, 1fr)'
      gap={1}
    >
      <GridItem bg='tomato' />
      <GridItem bg='tomato' />
      <GridItem bg='tomato' />
      <GridItem bg='tomato' />
      <GridItem bg='tomato' />
      <GridItem bg='tomato' />
      <GridItem bg='tomato' />
      <GridItem bg='tomato' />
      <GridItem bg='tomato' />
    </Grid>
  );
};

export default Gameboard;
