import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Message from '../screens/Message';
import Contact from '../screens/Contact';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();
const Home = () => {
  return (
    <Tab.Navigator {...{screenOptions: {headerShown: false}}}>
      <Tab.Screen name="Message" component={Message} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Contact" component={Contact} />
    </Tab.Navigator>
  );
};

export default Home;
