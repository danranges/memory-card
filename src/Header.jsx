import { Button, Flex, Heading, useColorMode, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.100", "gray.700");

  return (
    <Flex width='100vw' background={bgColor} p={6}>
      <Heading>Test Header</Heading>
      <Button onClick={toggleColorMode}>Toggle</Button>
    </Flex>
  );
};

export default Header;
