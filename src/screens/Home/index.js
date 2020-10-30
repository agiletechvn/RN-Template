import React from 'react';
import Box from '@src/components/Box';

const Home = () => {
  return (
    <Box flex={1} flexDirection="row" justify="center" shadowDepth={2}>
      <Box shadowDepth={24} circle={40} background={'white'} marginTop={300} />
      <Box flex={1} flexDirection={'row'}>
        <Box flex={1} background="blue" />
        <Box flex={2} background="yellow" />
        <Box flex={1} background="black" />
      </Box>
    </Box>
  );
};

export default Home;
