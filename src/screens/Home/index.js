import React from 'react';
import { useRequest } from '@umijs/hooks';
import Box from '@src/components/Box';
import Text from '@src/components/Text';

const Home = () => {
  const { loading, data } = useRequest(async () => [1, 2, 3, 4, 5], {
    loadingDelay: 250,
  });

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <Box flex={1} flexDirection="row" justify="center" shadowDepth={2}>
      <Box shadowDepth={24} circle={40} background={'white'} marginTop={300} />
      <Box flex={1} flexDirection={'row'}>
        {data?.map((e, index) => (
          <Box flex={1} background={['black', 'white'][index % 2]} />
        ))}
      </Box>
    </Box>
  );
};

export default Home;
