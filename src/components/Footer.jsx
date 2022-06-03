import React from 'react';
import { Box, Icon, Text, Link, useColorModeValue } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      width='100vw'
      pos={'fixed'}
      bottom={0}
      bg={bgColor}
    >
      <Link
        href='https://github.com/danranges'
        display={'flex'}
        gap={2}
        alignItems='center'
        my={2}
      >
        <Text display={'inline'}>Made by</Text>
        <Icon as={FaGithub} w={8} h={8} />
        <Text display={'inline'}>Dan Ranges</Text>
      </Link>
    </Box>
  );
};

export default Footer;
