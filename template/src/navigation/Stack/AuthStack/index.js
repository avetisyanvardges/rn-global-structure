import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ROUT_NAMES } from 'constants/rout';
import { LoginScreen } from 'screens';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      id="AuthStack"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ROUT_NAMES.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
}

export { AuthStack };
