import React from 'react';
// import { Example } from '../screens';
import {
  Login,
  HomeScreen,
  MarriageScreen,
  RegisterScreen,
  ProfileScreen,
  DonationScreen,
  CoupleDetailScreen,
} from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { Services } from '@/components';

const Stack = createStackNavigator();

// @refresh reset
const MainNavigator = () => {
  const isLoggedIn = useSelector(
    (state: { login: { isLogin: boolean } }) => state.login,
  );
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn.isLogin ? (
        <>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="MarriageScreen" component={MarriageScreen} />
          <Stack.Screen
            name="CoupleDetailScreen"
            component={CoupleDetailScreen}
          />
          <Stack.Screen name="DonationScreen" component={DonationScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen name="Services" component={Services} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default MainNavigator;
