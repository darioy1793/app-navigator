import React from 'react'
import { Text, View } from 'react-native'
import { stylesGlobal } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any>{};

export const PersonaScreen = ({route}:Props) => {
   // console.log(props);
   const params = route.params;
   console.log(params); 
   
  return (
    <View style={stylesGlobal.container}>
        <Text style={stylesGlobal.title}>Persona Screen </Text>
    </View>
  )
}
