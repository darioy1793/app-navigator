import { createStackNavigator } from '@react-navigation/stack';
import { Pantalla1Screen } from '../screens/Pantalla1Screen';
import { Pantalla2Screen } from '../screens/Pantalla2Screen';
import { Pantalla3Screen } from '../screens/Pantalla3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {

  
  return (
    //screenOptions: para configurar las opciones de todas las pantallas del stack navigator
    <Stack.Navigator  screenOptions ={{cardStyle:{backgroundColor:'green'}, /* headershown:false */
      headerStyle:{elevation:4}
    }}>

      <Stack.Screen name="Pantalla1" options={{title:'HOME'}} component={Pantalla1Screen} />
      <Stack.Screen name="Pantalla2" options={{title:'Lista Producto'}} component={Pantalla2Screen} />
      <Stack.Screen name="Pantalla3" options={{title:'Configuraciones'}} component={Pantalla3Screen} />
      <Stack.Screen name="Persona" options={{title:'Lista Persona'}} component={PersonaScreen} />
    </Stack.Navigator>
  );
}