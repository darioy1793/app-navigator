import { createStackNavigator } from '@react-navigation/stack';
import { Pantalla1Screen } from '../screens/Pantalla1Screen';
import { Pantalla2Screen } from '../screens/Pantalla2Screen';
import { Pantalla3Screen } from '../screens/Pantalla3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';
import { Persona2 } from '../screens/Persona2';

//Props de navegación: especificar los parametros de navegacion
export type RootSatckParams ={
  Pantalla1:undefined,
  Pantalla2:undefined,
  Pantalla3:undefined,
  Persona:{id:number,nombre:string, edad:number},
  Persona2:undefined,
}

const Stack = createStackNavigator<RootSatckParams>();

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
      <Stack.Screen name="Persona2" options={{title:'Lista Persona'}} component={Persona2} />
    </Stack.Navigator>
  );
}