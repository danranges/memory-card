import React from 'react';
import Header from './components/Header';
import Gameboard from './components/Gameboard';
import Scoreboard from './components/Scoreboard';
import './App.css';
import { Flex } from '@chakra-ui/react';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Scoreboard streak='3' score='3' />
      <Flex width={'100vw'} justify={'center'}>
        <Gameboard />
      </Flex>
    </div>
  );
};

export default App;
