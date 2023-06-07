import { StyleSheet, Text, ScrollView, Pressable, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearMatchHistory, selectMatchHistory } from '../../features/gameSlice'
import { useIsFocused } from '@react-navigation/native'

const GameHistory = ({navigation}) => {
  const storedMatchHistory = useSelector(selectMatchHistory)
  const [matchHistory, setMatchHistory] = useState(storedMatchHistory)
  const isFocused = useIsFocused()
  const dispatch = useDispatch()

  useEffect(()=>{
    if (isFocused) {
      setMatchHistory(storedMatchHistory)
      console.log(`storedmatchHistory: ${JSON.stringify(storedMatchHistory)}`)
      console.log(`matchHistory[0]: ${matchHistory[0].date['year']}`)
    }
  },[isFocused,storedMatchHistory])


  return (
    <View style={styles.screen}>
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollcontainer}>
        <Text style={{color:'white'}}>GameHistory: Timmy been GAy</Text>
        <View>
          {matchHistory.map((match, idx) => 
            <View key={idx}>
              <Text  style={{color:'white'}}>{match.date['month']}/{match.date['day']}/{match.date['year']}</Text>
              <Text  style={{color:'white'}}>{JSON.stringify(match.scores)}</Text>
            </View>
          )}
        </View>
        <Pressable onPress={() => dispatch(clearMatchHistory())}>
              <Text style={{fontSize:36, color:'white'}}>Clear Match History</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Main')}>
              <Text style={{fontSize:36, color:'white'}}>Back</Text>
        </Pressable>
      </ScrollView>
    </View>
  )
}

export default GameHistory

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#16182A',
  },
  container: {
    backgroundColor: '#16182A',
    marginTop: 60,
  },
  scrollcontainer: {
    paddingBottom: 1000, ///This is very important for scrolling to the bottom, adjust as needed
    alignItems: 'center'
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