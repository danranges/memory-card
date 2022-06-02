import React from 'react';
import {
  IconButton,
  Flex,
  Heading,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Header = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const modeIcon = useColorModeValue(<MoonIcon />, <SunIcon />);
  const modeBg = useColorModeValue('purple.900', 'orange.300');

  return (
    <Flex width='100vw' justify={'center'} background={bgColor} p={6}>
      <Flex justify={'space-between'} w={'100%'} maxW={'600px'}>
        <Heading as='h1' size='2xl'>
          Memory Game
        </Heading>
        <IconButton
          onClick={toggleColorMode}
          color={'white'}
          icon={modeIcon}
          fontWeight='bold'
          bg={modeBg}
        />
      </Flex>
    </Flex>
  );
};

export default Header;
