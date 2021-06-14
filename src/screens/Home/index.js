import React, { useCallback } from 'react';
import Box from '@src/components/Box';
import Typography from '@src/components/Typography';
import { ScrollView } from 'react-native';

const ROUTES = [
  'Typography',
  'FlexBoxDemo',
  'AnimatedButtonWithSvgIconSample',
  'AnimatedScrollWheelSample',
  'ListDemo',
  'DetailDemo',
  'SkeletonDemo'
];

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
          <Box
            pressable
            key={route}
            shadowDepth={2}
            background="white"
            padding={[4, 8]}
            margin={[4, 0, 0, 0]}
            onPress={() => onItemPress(route)}
          >
            <Typography type="h2">{route}</Typography>
          </Box>
        ))}
      </ScrollView>
    </Box>
  );
};

export default Home;
