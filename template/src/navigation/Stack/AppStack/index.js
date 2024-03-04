import { createStackNavigator } from '@react-navigation/stack';
import { ROUT_NAMES } from 'constants/rout';
import TabNavigator from 'navigation/Tab';

function AppStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ROUT_NAMES.TAB}>
      <Stack.Screen name={ROUT_NAMES.TAB} component={TabNavigator} />
    </Stack.Navigator>
  );
}

export { AppStack };
