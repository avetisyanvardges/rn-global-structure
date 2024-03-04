import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from './Stack/AppStack';
import { AuthStack } from './Stack/AuthStack';
import { ROUT_NAMES } from 'constants/rout';
import { navigationRef } from 'services/navigation';

function StackNavigation(props) {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: true,
        }}>
        <Stack.Screen name={ROUT_NAMES.AUTH_LAYER} component={AuthStack} />
        <Stack.Screen name={ROUT_NAMES.APP_LAYER} component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
