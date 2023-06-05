import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectAllScores, selectAnswers, selectWagers } from '../../../features/gameSlice'
import { useEffect } from 'react'
import ContestantScore from './ContestantScore'
import { useIsFocused } from '@react-navigation/native'
import Answer from './Answer'


const FinalJPartyControl = ({navigation}) => {

  const storedScores = useSelector(selectAllScores)
  const storedWagers = useSelector(selectWagers)
  const storedAnswers = useSelector(selectAnswers)
  const [scores, setScores] = useState(storedScores)
  const [wagers, setWagers] = useState(storedWagers)
  const [answers, setAnswers] = useState(storedAnswers)
  const isFocused = useIsFocused()

  useEffect(()=> {
    console.log(`printing all scores: ${JSON.stringify(storedScores)}`)
    setScores(storedScores)
    setWagers(storedWagers)
    setAnswers(storedAnswers)
  }, [storedScores,storedWagers,storedAnswers,isFocused])

  return (
    <View style={styles.screen}>
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollcontainer}>

        <Text style={styles.logo}>Final<Text style={styles.logoColor}>J!</Text>Party</Text>

        <View style={styles.scoresContainer}>
          {Object.entries(scores).map(entry => <ContestantScore key={entry[0]} contestant={entry[0]} currscore={entry[1]}/>)}
        </View>

        <Text style={{color: 'white'}}>Final Answers</Text>

        <View style={styles.wagersContainer}>
          {Object.entries(wagers).map(entry => <Answer key={entry[0]} contestant={entry[0]} wager={entry[1]} answer={answers[entry[0]]}/>)}
        </View>

        <Pressable onPress={() => navigation.navigate('Main')}>
              <Text style={{fontSize:36, color:'white', top:'50%'}}>Back</Text>
        </Pressable>

      </ScrollView>
    </View>
  )
}

export default FinalJPartyControl

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#16182A',
  },
  container: {
    backgroundColor: '#16182A',
    marginTop: 60,
  },
  scrollcontainer: {
    paddingBottom: 200, ///This is very important for scrolling to the bottom, adjust as needed
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
  scoresContainer: {
    margin: '2%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  wagersContainer: {
    margin: '2%',
  },
})