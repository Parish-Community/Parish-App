import React from 'react';
// import { Example } from '../screens';
import { Login, HomeScreen, MarriageScreen } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// @refresh reset
const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MarriageScreen" component={MarriageScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
