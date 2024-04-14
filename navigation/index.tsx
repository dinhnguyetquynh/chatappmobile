import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../screens';
import Home from './Home';

const Stack = createNativeStackNavigator();

const AppRouters = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator {...{screenOptions: {headerShown: false}}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouters;
