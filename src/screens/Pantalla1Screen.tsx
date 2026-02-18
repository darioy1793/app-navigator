import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, View } from 'react-native'
import { stylesGlobal } from '../theme/appTheme';
import { RootSatckParams } from '../navigator/StackNavigator';

type Props = StackScreenProps<RootSatckParams, 'Pantalla1'>;

interface Persona{
    id: number;
    nombre: string;   
    edad: number;
}

export const Pantalla1Screen = ({navigation}:Props) => {

  const persona: Persona = {
    id: 1,
    nombre: 'Viviana',
    edad: 34
  }
  const persona2: Persona= {
    id: 2,
    nombre: 'Stalyn',
    edad: 24
  }

    //console.log(props);
  return (
    <View style={stylesGlobal.container}>
        <Text style={stylesGlobal.title} > Pantalla 1 Screen </Text>
        <Button title= 'Ir pantalla 2'
        onPress={()=> navigation.navigate('Pantalla2')} />
          <Button title= 'Ir persona'
        onPress={()=> navigation.navigate('Persona',persona)} />
        <Button title='persona'
        onPress={()=> navigation.navigate('Persona',persona2)}/>
    </View>
  )
}


