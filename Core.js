import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import MainMenu from './pages/main_menu/MainMenu';
import HowToPlay from './pages/how_to/HowToPlay';
import Settings from './pages/settings/Settings';
import Board from './pages/board/Board';



enableScreens()
const Stack = createNativeStackNavigator()

const Core = () => {



  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Main' screenOptions={{
          headerShown:false
        }}>
          <Stack.Screen name='Main' component={MainMenu}/>
          <Stack.Screen name ='HowTo' component={HowToPlay} />
          <Stack.Screen name ='Settings' component={Settings} />
          <Stack.Screen name ='Board' component={Board} />

        </Stack.Navigator>
        <StatusBar barStyle={'light-content'}/>
      </NavigationContainer>
  )
}

export default Core
