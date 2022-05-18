import React from "react";
import Header from "./Header";
import "./App.css";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Flex width='100vw' bg='red.500' justify={"center"} gap='1rem'>
        <Box>
          <h1>
            Streak: <span>{"3"}</span>
          </h1>
        </Box>
        <Box>
          <h1>
            Score: <span>{"2"}</span>
          </h1>
        </Box>
      </Flex>
      <Grid m={2} h='400px' w='400px' templateRows='repeat(3, 1fr)' templateColumns='repeat(3, 1fr)' gap={1}>
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
    </div>
  );
};

export default App;
