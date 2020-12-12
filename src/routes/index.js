import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@src/screens/Home';
import AnimatedScrollWheelSample from '@src/screens/AnimatedScrollWheelSample';
import TypographyDemo from '@src/screens/TypographyDemo';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Typography" component={TypographyDemo} />
        <Stack.Screen
          name="AnimatedScrollWheelSample"
          component={AnimatedScrollWheelSample}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
