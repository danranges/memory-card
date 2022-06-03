import React from 'react';
import { Flex, Box, useColorModeValue } from '@chakra-ui/react';

const Scoreboard = ({ streak, score }) => {
  const bgColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Flex width='100vw' bg={bgColor} justify={'center'} gap='1rem'>
      <Box>
        <h1>
          Score: <span>{score}</span>
        </h1>
      </Box>
      <Box>
        <h1>
          All-Time: <span>{streak}</span>
        </h1>
      </Box>
    </Flex>
  );
};

export default Scoreboard;
