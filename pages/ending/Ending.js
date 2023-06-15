import { StyleSheet, Text, View, Pressable, Dimensions, Platform, PixelRatio} from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addGame, clearGame, selectAllScores, selectMatchHistory, selectSortedScores } from '../../features/gameSlice'
import { useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  } = Dimensions.get('window');
  
  // based on iphone 5s's scale
  const scale = SCREEN_WIDTH / 428;
  
  export function normalize(size) {
    const newSize = size * scale 
    console.log(scale) 
    console.log(newSize) 
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
  }

const Ending = ({navigation}) => {
    const storedScores = useSelector(selectAllScores)
    let sortedScores = useSelector(selectSortedScores)
    const [scores, setScores] = useState(sortedScores)
    const isFocused = useIsFocused()
    const dispatch = useDispatch()
    useEffect(()=> {
        if (isFocused) {
            setScores(sortedScores)
        }
    },[storedScores,isFocused])

    const handleGameEnd = () => {
        dispatch(addGame(scores))
        dispatch(clearGame())
        navigation.navigate('Main')
    }


  return (
    <View style={styles.container}>
        <Text style={styles.logo}>Final<Text style={styles.logoColor}>J!</Text>Party</Text>

        <View>
            <Text style={{color: 'white', fontSize:normalize(30)}}>FINAL SCORES</Text>
            <View style={{borderColor:'#6A41FF', borderBottomWidth: 1, marginBottom:'5%'}}></View>
        </View>

        <View style={{alignItems: 'center'}}>
            <Text style={styles.firstPlace}>1. {scores[0][0]} ${scores[0][1]}</Text>
            <Text style={styles.secondPlace}>2. {scores[1][0]} ${scores[1][1]}</Text>
            <View>
                {scores.length > 2 && scores.slice(2).map((entry,idx)=> 
                    <Text style={styles.thirdPlace} key={entry[0]}>{idx+3}. {entry[0]} ${entry[1]}</Text>)}
            </View>
        </View>
        <Text style={styles.thanks}>THANKS FOR PLAYING J!PARTY!!</Text>
        <Pressable onPress={() => handleGameEnd()}>
            <Text style={{fontSize:normalize(32), color:'white'}}>Main Menu</Text>
            <View style={{borderColor:'#6A41FF', borderBottomWidth: 1}}></View>
        </Pressable>
    </View>
  )
}

export default Ending

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#16182A',
        height: '100%',
        alignItems: 'center',
    },
    logo:{
        fontSize:normalize(46),
        color:'white',
        marginTop:'20%',
        fontWeight:'700',
        marginBottom: '10%'
    },
    logoColor: {
        color: '#6A41FF',
        textDecorationLine: 'none',
    },
    firstPlace: {
        color:'#FFD700',
        fontSize: normalize(62),
        marginBottom: '2%'
    },
    secondPlace: {
        color: 'white',
        fontSize: normalize(42),
        marginBottom: '2%'
    },
    thirdPlace: {
        color: 'white',
        fontSize: normalize(30),
        marginBottom: '1%'
    },
    thanks: {
        color: 'white',
        fontSize: normalize(16),
        marginVertical: '15%'
    }
})