import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import MainMenu from './pages/main_menu/MainMenu';
import HowToPlay from './pages/how_to/HowToPlay';
import Settings from './pages/settings/Settings';
import Board from './pages/host_screens/board/Board';
import HostPanel from './pages/host_screens/board/HostPanel';
import Buzzer from './pages/contestant_screens/Buzzer';
import FinalJParty from './pages/contestant_screens/FinalJParty';
import FinalJPartyControl from './pages/host_screens/finalJparty/FinalJPartyControl';
import Waiting from './pages/contestant_screens/Waiting';
import Wager from './pages/contestant_screens/Wager';
import Ending from './pages/ending/Ending';
import GameHistory from './pages/main_menu/GameHistory'


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
          <Stack.Screen name ='Board' component={Board} options={{gestureEnabled: false}} />
          <Stack.Screen name ='HostPanel' component={HostPanel} options={{gestureEnabled: false}}/>
          <Stack.Screen name ='Buzzer' component={Buzzer} options={{gestureEnabled: false}}/>
          <Stack.Screen name ='FinalJParty' component={FinalJParty} options={{gestureEnabled: false}}/>
          <Stack.Screen name ='FinalJPartyControl' component={FinalJPartyControl} options={{gestureEnabled: false}}/>
          <Stack.Screen name ='Waiting' component={Waiting} options={{gestureEnabled: false}}/>
          <Stack.Screen name ='Wager' component={Wager} options={{gestureEnabled: false}}/>
          <Stack.Screen name ='Ending' component={Ending} options={{gestureEnabled: false}}/>
          <Stack.Screen name ='History' component={GameHistory} options={{gestureEnabled: false}}/>
          
        </Stack.Navigator>
        <StatusBar barStyle={'light-content'}/>
      </NavigationContainer>
  )
}

export default Core
