import React from 'react'
import { StackNavigator } from './src/navigator/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './src/navigator/DrawerNavigator';
import { DrawerPersonalizadoNavigator } from './src/navigator/DrawerPersonalizadoScreen';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator/> */}
      {/* <DrawerNavigator/> */}
      <DrawerPersonalizadoNavigator/>
     
    </NavigationContainer>
  )
}

export default App;