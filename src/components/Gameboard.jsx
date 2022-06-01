import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

const Gameboard = ({ palette }) => {
  return (
    <Grid
      m={2}
      h='400px'
      w='400px'
      templateRows='repeat(3, 1fr)'
      templateColumns='repeat(3, 1fr)'
      gap={1}
    >
      <GridItem bg={`${palette}.500`} />
      <GridItem bg={`${palette}.500`} />
      <GridItem bg={`${palette}.500`} />
      <GridItem bg={`${palette}.500`} />
      <GridItem bg={`${palette}.500`} />
      <GridItem bg={`${palette}.500`} />
      <GridItem bg={`${palette}.500`} />
      <GridItem bg={`${palette}.500`} />
      <GridItem bg={`${palette}.500`} />
    </Grid>
  );
};

export default Gameboard;
