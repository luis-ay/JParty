import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import { makeHost } from '../../features/gameSlice'
import { useDispatch } from 'react-redux'



const MainMenu = ({navigation}) => {
  
  const dispatch = useDispatch()
  const handleHostPress =() => {
    dispatch(makeHost(true))
    navigation.navigate('HowTo')
  }

  const handleJoinPress=()=> {
    dispatch(makeHost(false))
    navigation.navigate('HowTo')
  }

  return (
    <SafeAreaView style={styles.container}>
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
      <Pressable style={styles.menuButtonOutline}>
        <Text style={styles.menuButtonText}>
          {`Match History`}
        </Text>
      </Pressable>
      <Text style={styles.review}>If you liked our app, please consider leaving a review</Text>
    </SafeAreaView>
      
  )
}

export default MainMenu

const styles = StyleSheet.create({
  logo:{
    fontSize:36,
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
    flexWrap: 'wrap',
    backgroundColor: '#16182A',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxHeight:'100%'
  },
  menuButtonText: {
    width: 105,
    height: 34,
    letterSpacing: 1.96,
    fontSize: 14,
    fontWeight: 400,
    textAlign: 'center',
    textAlignVertical: 'bottom',
    color: '#ffffff',
  },
  menuButtonOutline: {
    display: 'flex',
    flexDirection: 'column',
    width: 200,
    height: 50,
    borderWidth:4,
    borderColor:'#6A41FF',
    padding:10,
    alignItems:'center'
  },
  review: {
    color: '#aeb1c2'
  }
})