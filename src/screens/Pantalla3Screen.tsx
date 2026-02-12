import React from 'react'
import { Button, Text, View } from 'react-native'
import { stylesGlobal } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack'


interface Props extends StackScreenProps<any, any>{};
export const Pantalla3Screen = ({navigation}:Props) => {
  return (
    <View style={stylesGlobal.container}>
            <Text style={stylesGlobal.title}>Pantalla 3 Screen </Text>
            <Button title='Regresar' onPress={()=> navigation.goBack()} /> //regresa a la pantalla anterior
                <Button title='Ir Home' onPress={()=> navigation.popToTop()} />//regresa a la pantalla inicial del stack navigator
        </View>
  )
}
