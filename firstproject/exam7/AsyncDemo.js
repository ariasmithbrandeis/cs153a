import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Async0Screen from './Async0';
import Async1Screen from './Async1';
import Async2Screen from './Async2';
import Async3Screen from './Async3';


const Tab = createBottomTabNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Async0Screen} />
        <Tab.Screen name="Data" component={Async1Screen} />
        <Tab.Screen name="Volume" component={Async2Screen} />
        <Tab.Screen name="Surface Area" component={Async3Screen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

