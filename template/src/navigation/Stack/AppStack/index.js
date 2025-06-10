import { ROUT_NAMES } from 'constants/rout';
import TabNavigator from 'navigation/Tab';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator
      id="AppStack"
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ROUT_NAMES.TAB}>
      <Stack.Screen name={ROUT_NAMES.TAB} component={TabNavigator} />
    </Stack.Navigator>
  );
}

export { AppStack };
