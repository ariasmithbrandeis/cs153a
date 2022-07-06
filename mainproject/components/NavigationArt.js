import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomePage from './HomePage';
import DevelopersPage from './DevelopersPage';
import SyncArt from './SyncArt';
import InspoPage from './InspoPage';
import TestimonialPage from './TestimonialPage';

const Tab = createBottomTabNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Developers Page" component={DevelopersPage} />
        <Tab.Screen name="Art Page" component={SyncArt} />
        <Tab.Screen name="Inspo Page" component={InspoPage} />
        <Tab.Screen name="Testimonials Page" component={TestimonialPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

