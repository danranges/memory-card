import React from 'react';
import {
  Button,
  Flex,
  Heading,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

const Header = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.100', 'gray.700');

  return (
    <Flex width='100vw' justify={'space-between'} background={bgColor} p={6}>
      <Heading>Memory Game</Heading>
      <Button onClick={toggleColorMode}>
        {useColorModeValue('Dark', 'Light')}
      </Button>
    </Flex>
  );
};

export default Header;
