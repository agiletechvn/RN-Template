import React from 'react';
import Box from '@src/components/Box';
import Typography from '@src/components/Typography';
import useFlatList from '@src/hooks/useFlatList';
import { FlatList } from 'react-native-gesture-handler';

const Home = () => {
  const { loading, flatListProps } = useFlatList(async (lastResult) => {
    return {
      list: [
        { id: '1', name: '1' },
        { id: '2', name: '2' },
        { id: '3', name: '3' },
        { id: '4', name: '4' },
        { id: '5', name: '5' },
        { id: '6', name: '6' },
        { id: '7', name: '7' },
        { id: '8', name: '8' },
        { id: '9', name: '9' },
        { id: '10', name: '10' },
        { id: '2', name: '2' },
        { id: '2', name: '2' },
        { id: '2', name: '2' },
        { id: '2', name: '2' },
        { id: '2', name: '2' },
        { id: '2', name: '2' },
        { id: '2', name: '2' },
        { id: '2', name: '2' },
        { id: '2', name: '2' },
        { id: '2', name: '2' },
        { id: '2', name: '2' },
        { id: '2', name: '2' },
        { id: '2', name: '2' },
        { id: '2', name: '2' },
        { id: '2', name: '2' },
        { id: '2', name: '2' },
        { id: '2', name: '2' },
      ].slice(0, 10),
      total: 20,
    };
  });

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box flex={1} flexDirection="row" justify="center" shadowDepth={2}>
      {/* <Box flex={1} flexDirection={'row'}>
        {data?.map((e, index) => (
          <Box flex={1} background={['black', 'white'][index % 2]} />
        ))}
      </Box> */}
      <Box flex={1}>
        <FlatList
          {...flatListProps}
          renderItem={({ item, index }) => {
            return <Typography>{item.name}</Typography>;
          }}
        />
      </Box>
    </Box>
  );
};

export default Home;
