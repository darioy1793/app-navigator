import React from 'react'
import { Text, View } from 'react-native'
import { stylesGlobal } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack';
import { RootSatckParams } from '../navigator/StackNavigator';

type Props = StackScreenProps<RootSatckParams,'Persona'>;
//interface para los parametros de navegacion
/* interface RouterParams{
  id:number;
  nombre:string;
  edad: number;
}
 */

export const PersonaScreen = ({route}:Props) => {
   // console.log(props);
   const params = route.params ;
  // console.log(params); 

  return (
    <View style={stylesGlobal.container}>
        <Text style={stylesGlobal.title}>Persona Screen </Text>
        <Text>{JSON.stringify(params)}</Text> 
      
    </View>
  )
}
