import React from 'react';
import { Heading, Button, Flex } from '@chakra-ui/react';

const PaletteSelector = ({ handleClick }) => {
  const paletteOptions = [
    'red',
    'orange',
    'yellow',
    'green',
    'teal',
    'blue',
    'purple',
    'pink',
    // 'gray',
  ];

  return (
    <Flex flexDirection='column' py={4} gap={2} align='center'>
      <Heading as={'h2'} size='xl' mb={2}>
        Choose a color palette:
      </Heading>
      {paletteOptions.map((color) => {
        return (
          <Button
            key={color}
            onClick={() => handleClick(color)}
            w={56}
            h={14}
            colorScheme={color}
          >
            {color}
          </Button>
        );
      })}
    </Flex>
  );
};

export default PaletteSelector;
