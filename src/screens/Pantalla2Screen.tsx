import React from 'react'
import { Button, Text, View } from 'react-native'
import { stylesGlobal } from '../theme/appTheme'
import { CommonActions, useNavigation } from '@react-navigation/native';

export const Pantalla2Screen = () => {
    //hook useNavigation para navegar entre pantallas
     const navigation = useNavigation();
  return (
    <View style={stylesGlobal.container}>
            <Text style={stylesGlobal.title}> Pantalla 2 Screen </Text>
            <Button title='Ir pantalla 3' onPress={()=> navigation.dispatch(CommonActions.navigate({name:'Pantalla3'}))} />
        </View>
  )
}
