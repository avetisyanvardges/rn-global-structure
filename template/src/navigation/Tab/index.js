import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ROUT_NAMES } from 'constants/rout';
import { HomeScreen } from 'screens';

function TabNavigator(props) {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name={ROUT_NAMES.HOME} component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
