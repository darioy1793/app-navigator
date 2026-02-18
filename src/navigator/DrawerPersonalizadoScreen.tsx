import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { stylesGlobal } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const DrawerPersonalizadoNavigator = ()=> {
  return (
    <Drawer.Navigator
        drawerContent={(props)=> <MenuLateral {...props} />}>
      <Drawer.Screen name="StackNavigator" options={{title:'Home'}} component={StackNavigator} />
      <Drawer.Screen name="Settings" options={{title:'Configuración'}} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

//Componente menú lateral
const MenuLateral= ({navigation}:DrawerContentComponentProps) => {
    return(
        <DrawerContentScrollView>
        <View style={stylesGlobal.containerAvatar}>
            <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeIk1R6CtgHGwum9-BvyXdmnzgMivsv2aXyQ&s'}} style={stylesGlobal.avatar}/>
        </View>
        <View style={stylesGlobal.containerMenu}>
            <TouchableOpacity style={stylesGlobal.menuBotton} onPress={()=>navigation.navigate('StackNavigator')}>
                <Text style={stylesGlobal.menuText}>Navegación</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesGlobal.menuBotton}>
                <Text style={stylesGlobal.menuText} onPress={()=>navigation.navigate('Settings')}>Ajustes</Text>
            </TouchableOpacity>
        </View>

        </DrawerContentScrollView>
     
    )
}