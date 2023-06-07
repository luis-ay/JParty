import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import { addContestant, changeDate, makeHost } from '../../features/gameSlice'
import { useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { clearGame } from '../../features/gameSlice'


const MainMenu = ({navigation}) => {
  
  const dispatch = useDispatch()

  const handleHostPress =() => {
    dispatch(makeHost(true))
    
    dispatch(addContestant('Tim'))
    dispatch(addContestant('Luis'))
    dispatch(addContestant('Bob'))
    
    navigation.navigate('Board')
    dispatch(changeDate())
  }

  const handleJoinPress=()=> {
    dispatch(makeHost(false))
    navigation.navigate('Buzzer')
  }
  
  const handleGameHistory = () => {
    dispatch(clearGame())
    AsyncStorage.getAllKeys()
        .then(keys => AsyncStorage.multiRemove(keys))
        .then(() => alert('success'));
    navigation.navigate('History')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>J<Text style={styles.logoColor}>!</Text>PARTY</Text>
      <Pressable style={styles.menuButtonOutline} onPress = {()=> navigation.navigate('HowTo')}>
        <Text style={styles.menuButtonText}>
          {`How To Play`}
        </Text>
      </Pressable>
      <Pressable style={styles.menuButtonOutline} onPress = {handleHostPress}>
        <Text style={styles.menuButtonText}>
          {`Host Game`}
        </Text>
      </Pressable>
      <Pressable style={styles.menuButtonOutline} onPress = {handleJoinPress}>
        <Text style={styles.menuButtonText}>
          {`Join Game`}
        </Text>
      </Pressable>
      <Pressable style={styles.menuButtonOutline} onPress = {()=> navigation.navigate('Settings')}>
        <Text style={styles.menuButtonText}>
          {`Settings`}
        </Text>
      </Pressable>
      <Pressable style={styles.menuButtonOutline} onPress={handleGameHistory}>
        <Text style={styles.menuButtonText}>
          {`Match History`}
        </Text>
      </Pressable>
      <Text style={styles.review}>If you liked our app, please consider leaving a review</Text>
    </View>
      
  )
}

export default MainMenu

const styles = StyleSheet.create({
  logo:{
    fontSize:60,
    color:'white',
    marginVertical:'10%',
    fontWeight:'700',
  },
  logoColor: {
    color: '#6A41FF',
    textDecorationLine: 'none',
  },
  container: {
    flex: 1,
    backgroundColor: '#16182A',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    maxHeight:'100%',
  },
  menuButtonText: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    letterSpacing: 1.96,
    fontSize: 14,
    fontWeight: 400,
    color: '#ffffff',
  },
  menuButtonOutline: {  
    width: '70%',
    height: '8.1%',/*padding encroached upon height so made 8.1 to fit Gs*/
    borderWidth:4,
    borderColor:'#6A41FF',
    padding:'5%',/*button inside padding*/
  },
  review: {
    color: '#aeb1c2'
  }
})