import { StyleSheet, Text, ScrollView, Pressable, View, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearMatchHistory, selectMatchHistory } from '../../features/gameSlice'
import { useIsFocused } from '@react-navigation/native'
import BackButtonSVG from '../../SVGS/BackButtonSVG'

const { width, height } = Dimensions.get('window')

const GameHistory = ({navigation}) => {
  const storedMatchHistory = useSelector(selectMatchHistory)
  const [matchHistory, setMatchHistory] = useState(storedMatchHistory)
  const isFocused = useIsFocused()
  const dispatch = useDispatch()
  let sortedScores = []
    
    // Object.entries(scores).forEach(entry=>
    //     sortedScores.push([entry[0],entry[1]])
    // )
    // console.log(`unsorted sortedScores: ${sortedScores}`)
    // sortedScores.sort(function(a,b) {return a[1]-b[1]})
    // sortedScores.reverse()
    // console.log(`sorted sortedScores: ${sortedScores}`)
    // sortedScores
  useEffect(()=>{
    if (isFocused) {
      setMatchHistory(storedMatchHistory)
      console.log(`storedmatchHistory: ${JSON.stringify(storedMatchHistory)}`)
      // console.log(`matchHistory[0]: ${matchHistory[0].scores}`) 
    }
  },[isFocused,storedMatchHistory])


  return (

    
    <View style={styles.screen}>
      <View style={styles.backButtonContainer}>
        <Pressable onPress={() => navigation.navigate('Main')}>
          <BackButtonSVG/>
        </Pressable>
      </View>
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollcontainer}>


        <Text style={styles.logo}>GAME<Text style={styles.logoColor}>!</Text>HISTORY</Text>
        <View>
          {(matchHistory.length>0) && 
            matchHistory.map((match, idx) => 
            <View key={idx} >
              <Text  style={styles.date}>{match.date['month']}/{match.date['day']}/{match.date['year']}</Text>
              <View style={styles.matchContainer}>
                  <Text style={styles.firstplaceScore}>{match.scores[0][0]}: ${match.scores[0][1]}</Text>
                  {match.scores.slice(1).map((score, idx)=> 
                    <Text style={styles.score} key={idx}>{score[0]}: ${score[1]}</Text>
                  )}
              </View>
            </View>
          )}
        </View>
        {(matchHistory.length>0) &&
        <Pressable onPress={() => dispatch(clearMatchHistory())}>
              <Text style={{fontSize:20, color:'white'}}>Clear Match History</Text>
              <View></View>
        </Pressable>
        }

        {(matchHistory.length == 0) &&
        <Text style={{color:'white', fontSize:20}}>All Finished Games will be stored here.</Text>
        }
        
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
    minHeight: '100%'
  },
  scrollcontainer: {
    paddingBottom: 250, ///This is very important for scrolling to the bottom, adjust as needed
    alignItems: 'center'
  },
  backButtonContainer: {
    width: '100%',
    marginHorizontal:'1%',
    justifyContent:'flex-start',
    marginTop: '15%'
  },
  logo:{
    fontSize:36,
    color:'white',
    fontWeight:'700',
    marginBottom: height * 0.05
    },
  logoColor: {
      color: '#6A41FF',
  },
  matchContainer: {
    borderColor: '#6A41FF',
    borderWidth: 2,
    width: width * 0.8,
    height: height * 0.12,
    alignContent: 'space-around',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: height * 0.02
  },
  date: {
    color: 'white',
    fontSize: 22,
    marginVertical: height * 0.01
  },
  firstplaceScore: {
    color:'#FFD700',
    fontSize: 22,
    paddingVertical: '1%'
  },
  score: {
    color: 'white',
    fontSize: 18,
    paddingVertical: '1%'
  }
})