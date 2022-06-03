import React from 'react';
import {
  IconButton,
  Flex,
  Heading,
  Box,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FaUndo } from 'react-icons/fa';

const Header = ({ handleNewGame, hasTheme }) => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const modeIcon = useColorModeValue(<MoonIcon />, <SunIcon />);
  const modeBg = useColorModeValue('purple.900', 'orange');
  const redoBg = useColorModeValue('gray.300', 'gray.600');

  return (
    <Flex width='100vw' justify={'center'} background={bgColor} px={6} py={2}>
      <Flex justify={'space-between'} w={'100%'} maxW={'600px'}>
        <Heading as='h1' size='2xl'>
          Memory Game
        </Heading>
        <Box>
          {hasTheme && (
            <IconButton
              onClick={handleNewGame}
              icon={<FaUndo />}
              bg={redoBg}
              mr={2}
            />
          )}
          <IconButton
            onClick={toggleColorMode}
            color={'white'}
            icon={modeIcon}
            fontWeight='bold'
            bg={modeBg}
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Header;
