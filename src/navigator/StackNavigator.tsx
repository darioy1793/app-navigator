import { createStackNavigator } from '@react-navigation/stack';
import { Pantalla1Screen } from '../screens/Pantalla1Screen';
import { Pantalla2Screen } from '../screens/Pantalla2Screen';
import { Pantalla3Screen } from '../screens/Pantalla3Screen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pantalla1" component={Pantalla1Screen} />
      <Stack.Screen name="Pantalla2" component={Pantalla2Screen} />
      <Stack.Screen name="Pantalla3" component={Pantalla3Screen} />
    </Stack.Navigator>
  );
}