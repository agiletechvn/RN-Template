import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@src/screens/Home';
import AnimatedScrollWheelSample from '@src/screens/AnimatedScrollWheelSample';
import TypographyDemo from '@src/screens/TypographyDemo';
import FlexBoxDemo from '@src/screens/FlexBoxDemo';
import AnimatedButtonWithSvgIconSample from '@src/screens/AnimatedButtonWithSvgIconSample';
import ListDemo from '@src/screens/ListDemo';
import DetailDemo from '@src/screens/DetailDemo';
import SekeletonDemo from '@src/screens/SkeletonDemo';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Typography" component={TypographyDemo} />
        <Stack.Screen name="FlexBoxDemo" component={FlexBoxDemo} />
        <Stack.Screen name="SkeletonDemo" component={SekeletonDemo} />
        <Stack.Screen
          name="AnimatedScrollWheelSample"
          component={AnimatedScrollWheelSample}
        />
        <Stack.Screen
          name="AnimatedButtonWithSvgIconSample"
          component={AnimatedButtonWithSvgIconSample}
        />
        <Stack.Screen name="ListDemo" component={ListDemo} />
        <Stack.Screen name="DetailDemo" component={DetailDemo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
