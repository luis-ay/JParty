import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectAllScores, selectWagers } from '../../../features/gameSlice'
import { useEffect } from 'react'
import ContestantScore from './ContestantScore'
import { useIsFocused } from '@react-navigation/native'


const FinalJPartyControl = ({navigation}) => {

  const storedScores = useSelector(selectAllScores)
  const [scores, setScores] = useState(storedScores)
  const isFocused = useIsFocused()
  useEffect(()=> {
    if (isFocused) {
      console.log(`printing all scores: ${JSON.stringify(storedScores)}`)
      setScores(storedScores)
    }
  }, [storedScores,isFocused])

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Final<Text style={styles.logoColor}>J!</Text>Party</Text>
      {Object.entries(scores).map(entry => <ContestantScore contestant={entry[0]} currscore={entry[1]}/>)}
      <Pressable onPress={() => navigation.navigate('Main')}>
            <Text style={{fontSize:36, color:'white', top:'50%'}}>Back</Text>
      </Pressable>
    </View>
  )
}

export default FinalJPartyControl

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16182A',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    maxHeight:'100%',
  },
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
})