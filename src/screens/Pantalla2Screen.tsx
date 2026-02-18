import React from 'react'
import { Button, Text, View } from 'react-native'
import { stylesGlobal } from '../theme/appTheme'
import { CommonActions, useNavigation } from '@react-navigation/native';
import { Persona2 } from './Persona2';

interface Persona{
  id:number,
  nombre:string,
  edad:number;
}

export const Pantalla2Screen = () => {
    //hook useNavigation para navegar entre pantallas
     const navigation = useNavigation();
     //crear objeto
     const persona:Persona={
      id: 3,
      nombre:"karen",
      edad: 45
     }
  return (
    <View style={stylesGlobal.container}>
            <Text style={stylesGlobal.title}> Pantalla 2 Screen </Text>
            <Button title='Ir pantalla 3' onPress={()=> navigation.dispatch(CommonActions.navigate({name:'Pantalla3'}))} />
               <Button title='Ir Persona2 ' onPress={()=> navigation.dispatch(CommonActions.navigate({name:'Persona2',params:persona}))} />
        </View>
  )
}
