import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomePage from './HomePage';
import DevelopersPage from './DevelopersPage';
import SyncArt from './SyncArt';
import AppAsyncContext from './AppAsyncContext';
import InspoPage from './InspoPage';

const Tab = createBottomTabNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Developers Page" component={DevelopersPage} />
        <Tab.Screen name="Art Page" component={SyncArt} />
        <Tab.Screen name="About Page" component={AppAsyncContext} />
        <Tab.Screen name="Inspo Page" component={InspoPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

