import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from './Stack/AppStack';
import { AuthStack } from './Stack/AuthStack';
import { ROUT_NAMES } from 'constants/rout';
import { navigationRef } from 'services/navigation';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        id="MainStack"
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
