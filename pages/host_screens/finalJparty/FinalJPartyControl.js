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
  const wagersReady = (Object.keys(storedWagers).length == Object.keys(storedScores).length)
  const answersReady = (Object.keys(storedAnswers).length == Object.keys(storedScores).length)
  // const answersReady = false
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

        <Text style={{color: 'white'}}>SCORES</Text>
        <View style={styles.underline}></View>
        <View style={styles.scoresContainer}>
          {Object.entries(scores).map(entry => <ContestantScore key={entry[0]} contestant={entry[0]} currscore={entry[1]}/>)}
        </View>

        {wagersReady && !answersReady &&   /////////wagers before answers have been recieved
        <View style={{alignItems:'center'}}>
          <Text style={{color: 'white'}}>Wagers</Text>
          <View style={styles.wagersContainer}>
            {Object.entries(wagers).map(entry => 
              <View key={entry[0]} style={{alignItems:'center', margin:'3%'}}>
                <Text style={{color: 'white', fontSize: 36, marginHorizontal:'10%', marginVertical:'5%'}}>{entry[0]}</Text>
                <Text style={{color:'#FFD700', fontSize:42}}>${entry[1]}</Text>
              </View>)}
          </View>
        </View>
        }

        {answersReady && 
        <View>
          <Text style={{color: 'white'}}>Final Answers</Text>
          <View style={styles.answersContainer}>
            {Object.entries(wagers).map(entry => <Answer key={entry[0]} contestant={entry[0]} wager={entry[1]} answer={answers[entry[0]]}/>)}
          </View>
        </View>}

        <Pressable onPress={() => navigation.navigate('Ending')}>
              <Text style={{fontSize:36, color:'white', top:'50%'}}>Submit</Text>
        </Pressable>

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
    margin: '5%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  wagersContainer: {
    margin: '5%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  },
  answersContainer: {
    margin: '2%',
  },
  underline: {
    width: '15%',
    height: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#6A41FF',
  }
})