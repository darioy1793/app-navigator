import React from 'react'
import { Text, View } from 'react-native'
import { stylesGlobal } from '../theme/appTheme'
import { useRoute } from '@react-navigation/native';

interface RouterParams{
    id:number,
    nombre:string,
    edad:number,
}

export const Persona2 = () => {
    //hook useRoute:permite capturar los parametros de navegacion
    const route= useRoute();
    //console.log(route.params)
    const params =route.params as RouterParams;
  return (
    <View style={stylesGlobal.container}>
        <Text style={stylesGlobal.title}>Persona 2</Text>
    </View>
  )
}
