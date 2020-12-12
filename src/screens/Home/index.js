import React, { useCallback } from 'react';
import Box from '@src/components/Box';
import Typography from '@src/components/Typography';
import TouchableBox from '@src/components/TouchableBox';
import { ScrollView } from 'react-native';

const ROUTES = ['Typography', 'FlexBoxDemo'];

const Home = ({ navigation }) => {
  const onItemPress = useCallback(
    (route) => {
      navigation.push(route);
    },
    [navigation],
  );

  return (
    <Box flex={1} padding={[4]} shadowDepth={2}>
      <ScrollView>
        {ROUTES.map((route) => (
          <TouchableBox
            shadowDepth={2}
            background="white"
            padding={[4, 8]}
            margin={[4, 0, 0, 0]}
            onPress={() => onItemPress(route)}
          >
            <Typography type="h2">{route}</Typography>
          </TouchableBox>
        ))}
      </ScrollView>
    </Box>
  );
};

export default Home;
