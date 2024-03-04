import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ROUT_NAMES } from 'constants/rout';
import { LoginScreen } from 'screens';

function AuthStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ROUT_NAMES.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
}

export { AuthStack };
